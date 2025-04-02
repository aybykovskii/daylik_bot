import { type } from 'arktype'

import { intId, modelUuidId } from './db'
import { UserDto } from './users'

export const friendshipRequestStatus = type("'pending' | 'accepted' | 'rejected'")

export const friendshipRequest = type({
  userId: intId,
  targetUserId: intId,
  status: friendshipRequestStatus,
})
export type FriendshipRequest = typeof friendshipRequest.infer

export const friendshipRequestDto = friendshipRequest.merge(modelUuidId)
export type FriendshipRequestDto = typeof friendshipRequestDto.infer

export type FriendshipRequestFullData = FriendshipRequestDto & {
  user: UserDto
  targetUser: UserDto
}
