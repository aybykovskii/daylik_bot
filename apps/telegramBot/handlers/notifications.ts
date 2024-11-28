import { Request, Router } from 'express'
import { Telegraf, Types } from 'telegraf'

import { api as apiClass } from 'api'
import { botLogger } from 'shared'
import { TelegrafContext } from 'types'

type NotificationBody = {
	message: string
	userIds?: string[]
	extra?: Types.ExtraReplyMessage
}

export const getNotificationRouter = (bot: Telegraf<TelegrafContext>, api: typeof apiClass) => {
	const router = Router()

	router.post('/', async (req: Request<unknown, unknown, NotificationBody>, res) => {
		let userIds: string[] | undefined = req.body.userIds

		if (!userIds) {
			const users = await api.users.list()

			if (!users) return

			userIds = users.map((user) => user.telegramUserId)
		}

		botLogger.info('Sending message to users', { userIds })

		for (const id of userIds) {
			try {
				bot.telegram?.sendMessage(id, req.body.message, req.body.extra)
			} catch (error) {
				botLogger.error(`Failed to send message to ${id}`, { error })
			}
		}

		res.status(200).send('Message sent')
	})

	return router
}
