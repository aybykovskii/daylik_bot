import { type } from 'arktype'

import { intId, modelIntId } from './db'
import { EventSharingDto } from './event-shares'
import { UserDto } from './users'

export const date = type(/202[5-9]\.[0-1][0-9]\.[0-3][0-9]/)
export const time = type(/[0-2][0-9]:[0-5][0-9]/)

export const event = type({
  userId: intId,
  date: date,
  time: time.or('null'),
  text: 'string',
  emoji: 'string',
  copyFromId: intId.optional(),
  datetime: 'string',
  notificationDatetime: 'string',
})
export type Event = typeof event.infer

export const eventDto = modelIntId.merge(event)
export type EventDto = typeof eventDto.infer

export type EventFullData = EventDto & {
  user: UserDto
  copyFrom: EventDto | null
  copies: EventDto[]
  shares: EventSharingDto[]
}
