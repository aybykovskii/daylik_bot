import { modelIntId } from './db'
import { event } from './events'
import { UserDto } from './users'

export const eventDraft = event.pick('userId', 'date', 'time', 'emoji', 'text')
export type EventDraft = typeof eventDraft.infer

export const eventDraftDto = eventDraft.merge(modelIntId)
export type EventDraftDto = typeof eventDraftDto.infer

export type EventDraftFullData = EventDraftDto & {
  user: UserDto
}
