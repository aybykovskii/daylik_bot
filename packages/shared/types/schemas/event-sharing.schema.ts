import { z } from 'zod'

import { Pretty } from '../common'

import { EventDto } from './event.schema'
import { ModelUuidBase, intId } from './postgre'
import { UserDto } from './user.schema'

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
