import { Middleware } from 'telegraf'

import { TelegrafContext } from 'shared/types'
import { ModelId, UserRequestResult, eventBase, modelId } from 'shared/types'

import dayjs from 'dayjs'
import {
	confirmCreationCD,
	confirmDeletionCD,
	rejectCreationCD,
	rejectDeletionCD,
	userRequestResultCD,
} from 'helpers'
import { env } from 'shared/environment'
import { botLogger } from 'shared/logger'
import { InlineKeyboardButton } from 'telegraf/types'
import { z } from 'zod'
import { MAIN_PROMPT } from '../prompts.json'

const getConfirmCreationKeyboard = (eventId: ModelId): InlineKeyboardButton[][] => [
	[
		{ text: 'Да', callback_data: confirmCreationCD.fill({ eventId }) },
		{ text: 'Нет', callback_data: rejectCreationCD.fill({ eventId }) },
	],
]

const getConfirmDeletionKeyboard = (eventId: ModelId): InlineKeyboardButton[][] => [
	[
		{ text: 'Да', callback_data: confirmDeletionCD.fill({ eventId }) },
		{ text: 'Нет', callback_data: rejectDeletionCD.fill({ eventId }) },
	],
]

export const messageHandler: Middleware<TelegrafContext> = async (ctx) => {
	const {
		message: msg,
		message: {
			chat: { id: messageChatId } = {},
		} = {},
	} = ctx

	const gptMessageHandler = async ({
		text,
		isEnd,
		chatId,
		userId,
		messageId,
	}: {
		text: string
		isEnd: boolean
		chatId: number | undefined
		userId: ModelId
		messageId: number | undefined
	}) => {
		const [actionName = '', dataString = '', message = ''] = text.split(env.MESSAGE_SEPARATOR)

		if (message.length) {
			ctx.telegram.editMessageText(chatId, messageId, undefined, message)

			if (dataString.trim().length) {
				try {
					const { result } = userRequestResultCD.get<{ result: UserRequestResult }>(actionName)

					switch (result) {
						case 'createEvent': {
							if (!isEnd) break

							const data = eventBase
								.pick({ date: true, time: true, text: true, emoji: true })
								.parse(JSON.parse(dataString))

							const eventDraft = await ctx.api.eventDrafts.create({ ...data, userId })

							await ctx.telegram.editMessageReplyMarkup(chatId, messageId, undefined, {
								inline_keyboard: getConfirmCreationKeyboard(eventDraft.id),
							})

							break
						}
						case 'deleteEvent': {
							if (!isEnd) break

							const { id } = z.object({ id: modelId }).parse(JSON.parse(dataString))

							await ctx.telegram.editMessageReplyMarkup(chatId, messageId, undefined, {
								inline_keyboard: getConfirmDeletionKeyboard(id),
							})

							break
						}

						case 'info':
						case 'error':
							break

						default:
							result satisfies never
							break
					}
				} catch (error) {
					botLogger.error(`Ocurred error while handling gpt answer: ${error}`)
				}
			}
		}
	}

	const sendGPTMessage = async (text: string, chatId: number | undefined) => {
		const message = await ctx.replyT('bot.generation_pending')
		const filteredEvents = ctx.user.events.filter(
			(event) => dayjs(event.date).isSame(dayjs(), 'day') || dayjs(event.date).isAfter(dayjs(), 'day')
		)

		botLogger.info({ filteredEvents })

		await ctx.gpt.sendStreamMessage(
			[
				{
					role: 'system',
					content: MAIN_PROMPT.replaceAll('{TODAY}', dayjs().format('MM.DD.YYYY'))
						.replaceAll('{TOMORROW}', dayjs().add(1, 'day').format('MM.DD.YYYY'))
						.replaceAll('{SEPARATOR}', env.MESSAGE_SEPARATOR)
						.replaceAll('{EVENTS}', JSON.stringify(filteredEvents)),
				},
				{ role: 'user', content: text },
			],
			(text, isEnd) =>
				gptMessageHandler({
					text,
					isEnd,
					chatId,
					userId: ctx.user.id,
					messageId: message.message_id,
				})
		)
	}

	if (msg && 'voice' in msg) {
		const fileId = msg.voice.file_id

		const fileLink = await ctx.telegram.getFileLink(fileId)
		const file = await fetch(fileLink as URL)

		const transcription = await ctx.gpt.getVoiceTranscription(file)

		await sendGPTMessage(transcription, messageChatId)
	} else if (msg && 'text' in msg) {
		await sendGPTMessage(msg.text, messageChatId)
	}
}
