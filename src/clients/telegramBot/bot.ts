import dayjs from 'dayjs'
import TelegramBot, { InlineKeyboardButton, Message } from 'node-telegram-bot-api'
import { z } from 'zod'

import {
	confirmCreationCD,
	confirmDeletionCD,
	rejectCreationCD,
	rejectDeletionCD,
	userRequestResultCD,
} from '~common/callbackData'
import { AppError } from '~common/error'
import { i18n } from '~common/i18n'
import { Log } from '~common/logger'
import {
	ModelId,
	TelegramUserId,
	UserRequestResult,
	eventBase,
	modelId,
	telegramUserId,
} from '~types'

import { Api } from '@api'
import { FileSystem, GPT } from '@helpers'

import { BotEnv } from './envSchema'
import { MAIN_PROMPT } from './prompts.json'

type ConstructorArg = {
	botToken: string
	openAIApiKey: string
	env: BotEnv
	api: Api
	i18n: typeof i18n
}

export class Bot extends TelegramBot {
	fs: FileSystem
	gpt: GPT
	api: Api
	env: BotEnv
	i18n: i18n.I18next

	#commandsList = z.enum(['start', 'info', 'help'])

	constructor({ botToken, openAIApiKey, env, api, i18n }: ConstructorArg) {
		super(botToken, { polling: true })

		this.api = api
		this.env = env
		this.i18n = i18n
		this.fs = new FileSystem()
		this.gpt = new GPT(openAIApiKey)
	}

	get commands() {
		return this.#commandsList.options.map((command) => ({
			command: `/${command}`,
			description: this.i18n.__mf(`commands.${command}.description`),
		}))
	}

	getMessageInfo = async (msg: Message) => {
		const {
			text,
			from,
			chat: { id: chatId },
		} = msg

		const userId = telegramUserId.parse(chatId)

		if (!from) throw new AppError('client', 'Message must have a sender')

		return {
			...msg,
			from,
			userId,
			text,
		}
	}

	send = async (
		userId: TelegramUserId,
		phrase: Parameters<typeof this.i18n.__mf>[0],
		phraseReplaces?: Record<PropertyKey, string | number> | undefined,
		inlineKeyboard?: InlineKeyboardButton[][]
	) => {
		try {
			return await this.sendMessage(
				userId,
				this.i18n.__mf(phrase, phraseReplaces ?? {}),
				!inlineKeyboard
					? undefined
					: {
							reply_markup: {
								inline_keyboard: inlineKeyboard,
							},
						}
			)
		} catch (error) {
			await this.sendMessage(userId, this.i18n.__mf('error'))

			throw new AppError('client', `${error}`)
		}
	}

	getConfirmCreationKeyboard = (eventId: ModelId): InlineKeyboardButton[][] => [
		[
			{ text: 'Да', callback_data: confirmCreationCD.fill({ eventId }) },
			{ text: 'Нет', callback_data: rejectCreationCD.fill({ eventId }) },
		],
	]

	getConfirmDeletionKeyboard = (eventId: ModelId): InlineKeyboardButton[][] => [
		[
			{ text: 'Да', callback_data: confirmDeletionCD.fill({ eventId }) },
			{ text: 'Нет', callback_data: rejectDeletionCD.fill({ eventId }) },
		],
	]

	gptMessageHandler = async ({
		text,
		isEnd,
		chatId,
		userId,
		messageId,
	}: {
		text: string
		isEnd: boolean
		chatId: number
		userId: ModelId
		messageId: number
	}) => {
		const [actionName = '', dataString = '', message = ''] = text.split(this.env.MESSAGE_SEPARATOR)

		if (message.length) {
			this.editMessageText(message, { message_id: messageId, chat_id: chatId })

			if (dataString.trim().length) {
				try {
					const { result } = userRequestResultCD.get<{ result: UserRequestResult }>(actionName)

					switch (result) {
						case 'createEvent': {
							if (!isEnd) break

							const data = eventBase.omit({ period: true, userId: true }).parse(JSON.parse(dataString))

							const eventDraft = await this.api.eventDrafts.create({ ...data, userId })

							await this.editMessageReplyMarkup(
								{ inline_keyboard: this.getConfirmCreationKeyboard(eventDraft.id) },
								{ chat_id: chatId, message_id: messageId }
							)

							break
						}
						case 'deleteEvent': {
							if (!isEnd) break

							const { id } = z.object({ id: modelId }).parse(JSON.parse(dataString))

							await this.editMessageReplyMarkup(
								{ inline_keyboard: this.getConfirmDeletionKeyboard(id) },
								{ chat_id: chatId, message_id: messageId }
							)

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
					Log.error(`Ocurred error while handling gpt answer: ${error}`)
				}
			}
		}
	}

	sendGPTMessage = async (text: string, chatId: number, telegramUserId: TelegramUserId) => {
		const message = await this.send(telegramUserId, 'generating')
		const user = await this.api.users.get(telegramUserId)

		if (!user) {
			return
		}

		Log.info({ events: user.events })

		await this.gpt.sendStreamMessage(
			[
				{
					role: 'system',
					content: MAIN_PROMPT.replaceAll('{TODAY}', dayjs().format('MM.DD.YYYY'))
						.replaceAll('{TOMORROW}', dayjs().add(1, 'day').format('MM.DD.YYYY'))
						.replaceAll('{SEPARATOR}', this.env.MESSAGE_SEPARATOR)
						.replaceAll('{EVENTS}', JSON.stringify(user.events)),
				},
				{ role: 'user', content: text },
			],
			(text, isEnd) =>
				this.gptMessageHandler({
					text,
					isEnd,
					chatId: chatId,
					userId: user.id,
					messageId: message.message_id,
				})
		)
	}

	messageHandler = async (message: TelegramBot.Message) => {
		const commandsList = this.#commandsList
		type Command = `/${z.infer<typeof commandsList>}`

		const {
			text,
			userId,
			from: { first_name: firstName, last_name: lastName },
		} = await this.getMessageInfo(message)

		const currentUser = await this.api.users.get(userId)

		switch (text as Command) {
			case '/start': {
				let fullName = currentUser?.fullName

				if (!fullName) {
					const createdUser = await this.api.users.create({
						firstName,
						lastName,
						telegramUserId: userId,
					})

					fullName = createdUser.fullName
				}

				await this.send(userId, 'commands.start.message', { fullName })
				break
			}

			case '/info': {
				await this.send(userId, 'commands.info.message')
				break
			}

			case '/help': {
				await this.send(userId, 'commands.help.message')
				break
			}

			default: {
				if (text?.length && currentUser) {
					await this.sendGPTMessage(text, message.chat.id, userId)
				}
			}
		}
	}

	voiceHandler = async (message: TelegramBot.Message) => {
		const {
			userId,
			chat: { id: chatId },
			voice,
		} = await this.getMessageInfo(message)
		if (!voice) return

		const { file_id: fileId } = voice

		const fileLink = await this.getFileLink(fileId)
		const filePath = `./${this.env.VOICES_FOLDER}/${fileId}.ogg`

		await this.fs.downloadAndSave(fileLink, filePath)

		const transcription = await this.gpt.getVoiceTranscription(filePath)

		await this.sendGPTMessage(transcription, chatId, userId)
		this.fs.delete(filePath)
	}

	callbackQueryHandler = async ({ data, message }: TelegramBot.CallbackQuery) => {
		if (!data || !message) return

		const {
			userId,
			chat: { id: chatId },
			message_id: messageId,
		} = await this.getMessageInfo(message)

		this.deleteMessage(chatId, messageId)

		switch (true) {
			case confirmCreationCD.match(data): {
				const { eventId } = confirmCreationCD.get<{ eventId: string }>(data)

				const draft = await this.api.eventDrafts.get(modelId.parse(eventId))

				if (!draft) {
					this.send(userId, 'event.notFound')
					return
				}

				const { id, createdAt, updatedAt, ...eventDraft } = draft

				await this.api.events.create(eventDraft)
				await this.api.eventDrafts.delete(id)

				this.send(userId, 'event.creation.confirmed')
				break
			}

			case rejectCreationCD.match(data): {
				const { eventId } = rejectCreationCD.get<{ eventId: string }>(data)

				await this.api.eventDrafts.delete(modelId.parse(eventId))

				this.send(userId, 'event.creation.cancelled')
				break
			}

			case confirmDeletionCD.match(data): {
				const { eventId } = confirmDeletionCD.get<{ eventId: string }>(data)

				await this.api.events.delete(modelId.parse(eventId))

				this.send(userId, 'event.deletion.confirmed')
				break
			}

			case rejectDeletionCD.match(data): {
				this.send(userId, 'event.deletion.cancelled')
				break
			}
		}
	}
}
