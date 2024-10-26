import { z } from 'zod'

import { PrettyZod } from '../common'
import { eventDraft } from '../schemas'

import { withDbId } from './base.dto'

export const createEventDraftDto = eventDraft
export type CreateEventDraftDto = PrettyZod<typeof createEventDraftDto>

export const updateEventDraftDto = eventDraft.omit({ userId: true }).partial()
export type UpdateEventDraftDto = PrettyZod<typeof updateEventDraftDto>

export const eventDraftResponseDto = eventDraft.extend(withDbId.shape)
export type EventDraftResponseDto = PrettyZod<typeof eventDraftResponseDto>

export const eventDraftsResponseDto = z.array(eventDraftResponseDto)
export type EventDraftsResponseDto = z.infer<typeof eventDraftsResponseDto>
