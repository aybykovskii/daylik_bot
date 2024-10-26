import { z } from 'zod'

import { PrettyZod } from '../common'
import { event, eventSharing, user } from '../schemas'

import { withDbId, withDbUuids } from './base.dto'

export const createEventSharingDto = eventSharing.extend({
	usageLimit: eventSharing.shape.usageLimit.optional(),
	usageAmount: eventSharing.shape.usageAmount.optional(),
})
export type CreateEventSharingDto = PrettyZod<typeof createEventSharingDto>

export const updateEventSharingDto = eventSharing
	.omit({ userId: true, eventId: true, usageLimit: true })
	.partial()
export type UpdateEventSharingDto = PrettyZod<typeof updateEventSharingDto>

export const eventSharingResponseDto = eventSharing.extend(withDbUuids.shape)
export type EventSharingResponseDto = z.infer<typeof eventSharingResponseDto>

export const eventSharingFullDataResponseDto = eventSharingResponseDto.extend({
	user: user.extend(withDbId.shape),
	event: event.extend(withDbId.shape),
	targetUser: user.extend(withDbId.shape).nullable(),
})
export type EventSharingFullDataResponseDto = PrettyZod<typeof eventSharingFullDataResponseDto>

export const eventSharesResponseDto = z.array(eventSharingResponseDto)
export type EventSharesResponseDto = PrettyZod<typeof eventSharesResponseDto>
