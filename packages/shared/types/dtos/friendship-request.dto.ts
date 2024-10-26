import { z } from 'zod'

import { PrettyZod } from '../common'
import { friendshipRequest, user } from '../schemas'

import { withDbId, withDbUuids } from './base.dto'

export const createFriendshipRequestDto = friendshipRequest.extend({
	status: friendshipRequest.shape.status.optional(),
})
export type CreateFriendshipRequestDto = PrettyZod<typeof createFriendshipRequestDto>

export const updateFriendshipRequestDto = friendshipRequest
	.omit({ userId: true, targetUserId: true })
	.partial()
export type UpdateFriendshipRequestDto = PrettyZod<typeof updateFriendshipRequestDto>

export const friendshipRequestResponseDto = friendshipRequest.extend(withDbUuids.shape)
export type FriendshipRequestResponseDto = PrettyZod<typeof friendshipRequestResponseDto>

export const friendshipRequestFullDataResponseDto = friendshipRequest.extend({
	user: user.extend(withDbId.shape),
	targetUser: user.extend(withDbId.shape),
})
export type FriendshipRequestFullDataResponseDto = PrettyZod<
	typeof friendshipRequestFullDataResponseDto
>

export const friendshipRequestsResponseDto = z.array(friendshipRequestResponseDto)
export type FriendshipRequestsResponseDto = PrettyZod<typeof friendshipRequestsResponseDto>
