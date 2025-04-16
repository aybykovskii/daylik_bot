import { Bot } from 'grammy'
import { Hono } from 'hono'

import { api as apiClass } from 'api'
import { botLogger } from 'shared'

import { BotContext, MessageExtra } from '@/types'

type NotificationBody = {
  message: string | string[]
  userIds?: string[]
  extra?: MessageExtra
}

export const getNotificationRouter = (bot: Bot<BotContext>, api: typeof apiClass) => {
  const router = new Hono()

  router.post('/', async (c) => {
    let { userIds, message, extra } = await c.req.json<NotificationBody>()

    if (Array.isArray(message) && Array.isArray(userIds) && message.length !== userIds?.length) {
      return c.json(
        { error: 'ERR_INVALID_MESSAGE_LENGTH', message: 'Message and userIds must have the same length' },
        400
      )
    }

    if (!userIds) {
      const users = await api.users.getAll()

      userIds = users.map((user) => user.telegramUserId)
    }

    for (const [index, id] of userIds.entries()) {
      try {
        bot.api?.sendMessage(id, Array.isArray(message) ? message[index] : message, extra)
      } catch (error) {
        botLogger.error(`Failed to send message to ${id}`, { error })
      }
    }

    return c.json({ message: 'Message sent' }, 200)
  })

  return router
}
