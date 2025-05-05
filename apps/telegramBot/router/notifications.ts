import { Type, type } from 'arktype'
import { Hono, MiddlewareHandler, ValidationTargets } from 'hono'

import { api as apiClass } from 'api'
import { validator } from 'hono-openapi/arktype'
import { botLogger, notificationsQueue } from 'shared'

import { MessageExtra } from '@/types'

const notificationBody = type({
  message: 'string | string[]',
  'telegramUserIds?': 'string[]',
  'extra?': type('object').as<MessageExtra>(),
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
  const { message, telegramUserIds } = await c.req.json<typeof notificationBody.infer>()

  if (message.length === 0) {
    return c.json({ error: 'ERR_INVALID_MESSAGE_LENGTH', message: 'Message cannot be empty' }, 400)
  }

  if (Array.isArray(message) && Array.isArray(telegramUserIds) && message.length !== telegramUserIds?.length) {
    return c.json(
      { error: 'ERR_INVALID_MESSAGE_LENGTH', message: 'Message and telegramUserIds must have the same length' },
      400
    )
  }

  return next()
}

export const getNotificationRouter = (api: typeof apiClass) => {
  const router = new Hono()

  router.post('/', validate(notificationBody), validateMessage, async (c) => {
    let { telegramUserIds, message } = c.req.valid('json')

    if (!telegramUserIds) {
      const users = await api.users.getAll()

      telegramUserIds = users.map((user) => user.telegramUserId)
    }

    botLogger.info('Received notification, Sending to users.', { telegramUserIds })

    for (const [index, telegramUserId] of telegramUserIds.entries()) {
      const userMessage = Array.isArray(message) ? message[index] : message

      notificationsQueue.send({ message: userMessage, telegramUserId })
    }

    botLogger.info('Message sent to users.', { telegramUserIds })

    return c.json({ message: 'Message sent' }, 200)
  })

  return router
}
