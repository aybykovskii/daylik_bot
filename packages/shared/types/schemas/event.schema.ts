import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { eventDraft } from './event-draft.schema'
import { EventSharingDto, eventSharingResponseDto } from './event-sharing.schema'
import { ModelIntBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const eventDate = z.string().brand<'YYYY-MM-DD'>()
export type EventDate = z.infer<typeof eventDate>

export const event = eventDraft.extend({
	copyFromId: intId.nullable(),
})
export type EventBase = z.infer<typeof event>

export type EventDto = Pretty<ModelIntBase & EventBase>

export type EventFullData = EventDto & {
	user: UserDto
	copyFrom: EventDto | null
	copies: EventDto[]
	shares: EventSharingDto[]
}

export const createEventDto = z.object({ fromDraftId: z.number() }).or(event)
export type CreateEventDto = Pretty<z.infer<typeof createEventDto>>

export const updateEventDto = event.omit({ userId: true, copyFromId: true }).partial()
export type UpdateEventDto = z.infer<typeof updateEventDto>

export const eventResponseDto = event.extend(withDbId.shape)
export type EventResponseDto = Pretty<z.infer<typeof eventResponseDto>>

export const eventFullDataResponseDto = eventResponseDto.extend({
	copyFrom: eventResponseDto.nullable(),
	copies: eventResponseDto.array(),
	shares: eventSharingResponseDto.array(),
})
export type EventFullDataResponseDto = Pretty<z.infer<typeof eventFullDataResponseDto>>

export const eventsResponseDto = z.array(eventResponseDto)
export type EventsResponseDto = z.infer<typeof eventsResponseDto>
