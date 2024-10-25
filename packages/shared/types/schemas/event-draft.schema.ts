import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { eventDate } from './event.schema'
import { ModelIntBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const eventDraft = z.object({
	userId: intId,
	date: eventDate,
	time: z.string().nullable(),
	text: z.string(),
	emoji: z.string(),
})

export type EventDraftBase = z.infer<typeof eventDraft>
export type EventDraftDto = Pretty<ModelIntBase & EventDraftBase>

export type EventDraftFullData = EventDraftDto & {
	user: UserDto
}

export const createEventDraftDto = eventDraft
export type CreateEventDraftDto = Pretty<z.infer<typeof createEventDraftDto>>

export const updateEventDraftDto = eventDraft.omit({ userId: true }).partial()
export type UpdateEventDraftDto = Pretty<z.infer<typeof updateEventDraftDto>>

export const eventDraftResponseDto = eventDraft.extend(withDbId.shape)
export type EventDraftResponseDto = Pretty<z.infer<typeof eventDraftResponseDto>>

export const eventDraftsResponseDto = z.array(eventDraftResponseDto)
export type EventDraftsResponseDto = z.infer<typeof eventDraftsResponseDto>
