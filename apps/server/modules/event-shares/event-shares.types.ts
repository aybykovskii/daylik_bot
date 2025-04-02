import { type } from 'arktype'

import { eventSharing, eventSharingDto } from '@/types/event-shares'
import { eventDto } from '@/types/events'
import { userDto } from '@/types/users'

export const eventSharesError = type(
  `'ERR_EVENT_SHARING_DOES_NOT_EXIST'
  | 'ERR_EVENT_SHARING_INVALID_DATA'`
)
export type EventSharesError = typeof eventSharesError.infer

export const createEventSharingDto = eventSharing.merge(
  eventSharing.pick('usageAmount', 'usageLimit', 'targetUserId').partial()
)
export type CreateEventSharingDto = typeof createEventSharingDto.infer

export const updateEventSharingDto = eventSharing.pick('usageAmount', 'targetUserId').partial()
export type UpdateEventSharingDto = typeof updateEventSharingDto.infer

export const eventSharingFullData = eventSharingDto.merge({
  targetUser: userDto.or('null'),
  event: eventDto,
  user: userDto,
})
