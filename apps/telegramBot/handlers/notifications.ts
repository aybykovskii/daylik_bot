import { Request, Router } from 'express'
import { Telegraf, Types } from 'telegraf'

import { Api } from 'api'

import { TelegrafContext } from 'types'

type NotificationBody = {
	message: string
	userIds?: string[]
	extra?: Types.ExtraReplyMessage
}

export const getNotificationRouter = (bot: Telegraf<TelegrafContext>, api: Api) => {
	const router = Router()

	router.post('/', async (req: Request<unknown, unknown, NotificationBody>, res) => {
		const userIds = req.body.userIds ?? (await api.users.getAll()).map((user) => user.telegramUserId)

		for (const id of userIds) {
			bot.telegram?.sendMessage(id, req.body.message, req.body.extra)
		}

		res.status(200).send('Message sent')
	})

	return router
}
