import { z } from 'zod'

import { Pretty } from '../common'

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
