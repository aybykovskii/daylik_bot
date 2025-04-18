import { type } from 'arktype'
import { intId } from 'types/db'
import { eventDraft, eventDraftDto } from 'types/event-drafts'
import { userDto } from 'types/users'

export const EventDraftsError = {
  DoesNotExist: type('"ERR_EVENT_DRAFT_DOES_NOT_EXIST"'),
}

export const createEventDraftDto = eventDraft
export type CreateEventDraftDto = typeof createEventDraftDto.infer

export const updateEventDraftDto = eventDraft.omit('userId').partial().and({ userId: intId })
export type UpdateEventDraftDto = typeof updateEventDraftDto.infer

export const eventDraftFullData = eventDraftDto.merge({ user: userDto })
export type EventDraftFullData = typeof eventDraftFullData.infer
