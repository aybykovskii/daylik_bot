import { Middleware } from 'telegraf'

import { IntId, intId } from 'shared/types'
import { TelegrafContext } from 'types'

import dayjs from 'dayjs'
import { confirmCreationCD, confirmDeletionCD, rejectCreationCD, rejectDeletionCD } from 'helpers'
import { env } from 'shared/environment'
import { botLogger } from 'shared/logger'
import { InlineKeyboardButton } from 'telegraf/types'
import { GPTResponse } from 'types/gpt'
import { MAIN_PROMPT } from '../prompts.json'

const getConfirmCreationKeyboard = (eventId: IntId): InlineKeyboardButton[][] => [
	[
		{ text: 'Да', callback_data: confirmCreationCD.fill({ eventId }) },
		{ text: 'Нет', callback_data: rejectCreationCD.fill({ eventId }) },
	],
]

const getConfirmDeletionKeyboard = (eventId: IntId): InlineKeyboardButton[][] => [
	[
		{ text: 'Да', callback_data: confirmDeletionCD.fill({ eventId }) },
		{ text: 'Нет', callback_data: rejectDeletionCD.fill({ eventId }) },
	],
]

export const messageHandler: Middleware<TelegrafContext> = async (ctx) => {
	const {
		message: msg,
		user: { telegramUserId },
		api,
	} = ctx

	console.log('called message handler', { telegramUserId })

	const gptMessageHandler = async ({
		response,
		chatId,
		userId,
		messageId,
	}: {
		response: GPTResponse
		chatId: string | undefined
		userId: number
		messageId: number | undefined
	}) => {
		botLogger.info({ response })
		const { userMessage } = response

		if (userMessage.length) {
			ctx.telegram.editMessageText(chatId, messageId, undefined, userMessage)

			switch (response.action) {
				case 'createEvent': {
					if (!response.event) {
						ctx.telegram.editMessageText(
							chatId,
							messageId,
							undefined,
							'Произошла ошибка при обработке запроса'
						)
						botLogger.error('Failed to create event', { response })
						break
					}

					const eventDraft = await api.eventDrafts.create({ userId, ...response.event! })

					await ctx.telegram.editMessageReplyMarkup(chatId, messageId, undefined, {
						inline_keyboard: getConfirmCreationKeyboard(intId.parse(eventDraft.id)),
					})

					break
				}
				case 'deleteEvent': {
					await ctx.telegram.editMessageReplyMarkup(chatId, messageId, undefined, {
						inline_keyboard: getConfirmDeletionKeyboard(response.eventId!),
					})

					break
				}

				case 'info':
				case 'error':
					break

				default:
					response.action satisfies never
					break
			}
		}
	}

	const sendGPTMessage = async (text: string, chatId: string | undefined) => {
		console.log('called sendGPTMessage', { text, chatId })

		const message = await ctx.replyT('bot.generation_pending')
		const filteredEvents = ctx.user.events.filter(
			(event) => dayjs(event.date).isSame(dayjs(), 'day') || dayjs(event.date).isAfter(dayjs(), 'day')
		)

		botLogger.info({ filteredEvents })

		const answer = await ctx.gpt.sendMessage([
			{
				role: 'system',
				content: MAIN_PROMPT.replaceAll('{TODAY}', dayjs().format('MM.DD.YYYY'))
					.replaceAll('{TOMORROW}', dayjs().add(1, 'day').format('MM.DD.YYYY'))
					.replaceAll('{SEPARATOR}', env.MESSAGE_SEPARATOR)
					.replaceAll('{EVENTS}', JSON.stringify(filteredEvents)),
			},
			{ role: 'user', content: text },
		])

		gptMessageHandler({
			response: answer,
			chatId,
			userId: ctx.user.id,
			messageId: message.message_id,
		})
	}

	if (msg && 'voice' in msg) {
		const fileId = msg.voice.file_id

		const fileLink = await ctx.telegram.getFileLink(fileId)
		const file = await fetch(fileLink as URL)

		const transcription = await ctx.gpt.getVoiceTranscription(file)

		await sendGPTMessage(transcription, telegramUserId)
	} else if (msg && 'text' in msg) {
		await sendGPTMessage(msg.text, telegramUserId)
	}
}
