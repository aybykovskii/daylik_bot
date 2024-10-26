import { z } from 'zod'

import { Pretty } from '../common'

import { ModelUuidBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const friendshipRequestStatus = z.enum(['pending', 'accepted', 'rejected'])

export const friendshipRequest = z.object({
	userId: intId,
	targetUserId: intId,
	status: friendshipRequestStatus,
})

export type FriendshipRequestBase = z.infer<typeof friendshipRequest>
export type FriendshipRequestDto = Pretty<ModelUuidBase & FriendshipRequestBase>

export type FriendshipRequestFullData = Pretty<
	FriendshipRequestDto & {
		user: UserDto
		targetUser: UserDto
	}
>
