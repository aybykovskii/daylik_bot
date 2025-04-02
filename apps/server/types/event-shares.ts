import { type } from 'arktype'

import { intId, modelUuidId } from './db'
import { EventDto } from './events'
import { UserDto } from './users'

export const eventSharing = type({
  userId: intId,
  eventId: intId,
  targetUserId: intId.or('null'),
  usageLimit: 'number',
  usageAmount: 'number',
})

export type EventSharing = typeof eventSharing.infer

export const eventSharingDto = eventSharing.merge(modelUuidId)
export type EventSharingDto = typeof eventSharingDto.infer

export type EventSharingFullData = EventSharingDto & {
  user: UserDto
  targetUser: UserDto
  event: EventDto
}
