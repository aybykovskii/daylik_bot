import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId, withDbUuids } from './base.schema'
import { ModelUuidBase, intId } from './postgre'
import { UserDto, user } from './user.schema'

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

export const createFriendshipRequestDto = friendshipRequest.extend({
	status: friendshipRequest.shape.status.optional(),
})
export type CreateFriendshipRequestDto = Pretty<z.infer<typeof createFriendshipRequestDto>>

export const updateFriendshipRequestDto = friendshipRequest
	.omit({ userId: true, targetUserId: true })
	.partial()
export type UpdateFriendshipRequestDto = Pretty<z.infer<typeof updateFriendshipRequestDto>>

export const friendshipRequestResponseDto = friendshipRequest.extend(withDbUuids.shape)
export type FriendshipRequestResponseDto = Pretty<z.infer<typeof friendshipRequestResponseDto>>

export const friendshipRequestFullDataResponseDto = friendshipRequest.extend({
	user: user.extend(withDbId.shape),
	targetUser: user.extend(withDbId.shape),
})
export type FriendshipRequestFullDataResponseDto = Pretty<
	z.infer<typeof friendshipRequestFullDataResponseDto>
>

export const friendshipRequestsResponseDto = z.array(friendshipRequestResponseDto)
export type FriendshipRequestsResponseDto = Pretty<z.infer<typeof friendshipRequestsResponseDto>>
