import { z } from 'zod'

import { PrettyZod } from '../common'

import { event } from '../schemas'
import { withDbId } from './base.dto'
import { eventSharingResponseDto } from './event-sharing.dto'

export const createEventDto = event
	.omit({ copyFromId: true })
	.or(z.object({ fromDraftId: z.number() }))
export type CreateEventDto = PrettyZod<typeof createEventDto>

export const updateEventDto = event.omit({ userId: true, copyFromId: true }).partial()
export type UpdateEventDto = z.infer<typeof updateEventDto>

export const eventResponseDto = event.extend(withDbId.shape)
export type EventResponseDto = PrettyZod<typeof eventResponseDto>

export const eventFullDataResponseDto = eventResponseDto.extend({
	copyFrom: eventResponseDto.nullable(),
	copies: eventResponseDto.array(),
	shares: eventSharingResponseDto.array(),
})
export type EventFullDataResponseDto = PrettyZod<typeof eventFullDataResponseDto>

export const eventsResponseDto = z.array(eventResponseDto)
export type EventsResponseDto = z.infer<typeof eventsResponseDto>
