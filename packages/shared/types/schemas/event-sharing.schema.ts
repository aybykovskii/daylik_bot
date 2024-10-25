import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId, withDbUuids } from './base.schema'
import { EventDto, event } from './event.schema'
import { ModelUuidBase, intId } from './postgre'
import { UserDto, user } from './user.schema'

export const eventSharing = z.object({
	userId: intId,
	eventId: intId,
	targetUserId: intId.nullable(),
	usageLimit: z.number(),
	usageAmount: z.number(),
})
export type EventSharingBase = z.infer<typeof eventSharing>

export type EventSharingDto = Pretty<ModelUuidBase & EventSharingBase>

export type EventSharingFullData = EventSharingDto & {
	user: UserDto
	event: EventDto
	targetUser: UserDto | null
}

export const createEventSharingDto = eventSharing.extend({
	usageLimit: eventSharing.shape.usageLimit.optional(),
	usageAmount: eventSharing.shape.usageAmount.optional(),
})
export type CreateEventSharingDto = Pretty<z.infer<typeof createEventSharingDto>>

export const updateEventSharingDto = eventSharing
	.omit({ userId: true, eventId: true, usageLimit: true })
	.partial()
export type UpdateEventSharingDto = Pretty<z.infer<typeof updateEventSharingDto>>

export const eventSharingResponseDto = eventSharing.extend(withDbUuids.shape)
export type EventSharingResponseDto = z.infer<typeof eventSharingResponseDto>

export const eventSharingFullDataResponseDto = eventSharingResponseDto.extend({
	user: user.extend(withDbId.shape),
	event: event.extend(withDbId.shape),
	targetUser: user.extend(withDbId.shape).nullable(),
})
export type EventSharingFullDataResponseDto = Pretty<
	z.infer<typeof eventSharingFullDataResponseDto>
>

export const eventSharesResponseDto = z.array(eventSharingResponseDto)
export type EventSharesResponseDto = Pretty<z.infer<typeof eventSharesResponseDto>>
