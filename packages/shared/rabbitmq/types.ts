import { type } from 'arktype'

export const eventNotification = type({
  message: 'string',
  telegramUserId: 'string',
})

export type EventNotification = typeof eventNotification.infer
