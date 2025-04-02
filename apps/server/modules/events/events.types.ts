import { type } from 'arktype'

import { Event, event, eventDto } from '@/types/events'
import { userDto } from '@/types/users'

export const eventsError = type(`
  'ERR_EVENT_DOES_NOT_EXIST'
  | 'ERR_EVENT_DRAFT_DOES_NOT_EXIST'
  | 'ERR_EVENT_INVALID_DATA'
`)
export type EventsError = typeof eventsError.infer

type CreateEventUnion =
  | Pick<Required<Event>, 'copyFromId'>
  | Omit<Event, 'copyFromId' | 'datetime' | 'notificationDatetime'>

export const createEventDto = event.partial().as<CreateEventUnion>()
export type CreateEventDto = typeof createEventDto.infer

export const updateEventDto = event.omit('userId').partial()
export type UpdateEventDto = typeof updateEventDto.infer

export const eventFullData = eventDto.merge({ user: userDto })
export type EventFullData = typeof eventFullData.infer
