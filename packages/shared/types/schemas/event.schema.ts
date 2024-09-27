import { z } from 'zod'

import { Pretty } from '../common'

import { EventSharingDto } from './event-sharing.schema'
import { ModelIntBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const eventDate = z.string().brand<'YYYY-MM-DD'>()

export const event = z.object({
	userId: intId,
	date: eventDate,
	time: z.string().nullable(),
	text: z.string(),
	emoji: z.string(),

	copyFromId: intId.nullable(),
})

export type EventDate = z.infer<typeof eventDate>

export type EventBase = z.infer<typeof event>
export type EventDto = Pretty<ModelIntBase & EventBase>

export type EventFullData = EventDto & {
	user: UserDto
	copyFrom: EventDto | null
	copies: EventDto[]
	shares: EventSharingDto[]
}
