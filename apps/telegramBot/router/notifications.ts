import { Type, type } from 'arktype'
import { Bot } from 'grammy'
import { Hono, MiddlewareHandler, ValidationTargets } from 'hono'

import { api as apiClass } from 'api'
import { validator } from 'hono-openapi/arktype'
import { botLogger } from 'shared'

import { BotContext, MessageExtra } from '@/types'

const extra = type('object').as<MessageExtra>()

const notificationBody = type({
  message: 'string | string[]',
  'userIds?': 'string[]',
  'extra?': extra,
})

export const validate = <T extends Type, VT extends keyof ValidationTargets = 'json'>(type: T, target?: VT) =>
  validator(target ?? 'json', type, (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: 'ERR_VALIDATION_FAILED',
          details: result.errors.map(({ path, message }) => ({ path, message })),
        },
        400
      )
    }
  })

const validateMessage: MiddlewareHandler = async (c, next) => {
  const { message, userIds } = await c.req.json<typeof notificationBody.infer>()

  if (message.length === 0) {
    return c.json({ error: 'ERR_INVALID_MESSAGE_LENGTH', message: 'Message cannot be empty' }, 400)
  }

  if (Array.isArray(message) && Array.isArray(userIds) && message.length !== userIds?.length) {
    return c.json(
      { error: 'ERR_INVALID_MESSAGE_LENGTH', message: 'Message and userIds must have the same length' },
      400
    )
  }

  return next()
}

export const getNotificationRouter = (bot: Bot<BotContext>, api: typeof apiClass) => {
  const router = new Hono()

  router.post('/', validate(notificationBody), validateMessage, async (c) => {
    let { userIds, message, extra } = c.req.valid('json')

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
