import { type } from 'arktype'

import { friendshipRequest } from '@/types/friendship-requests'
import { userDto } from '@/types/users'

export const FriendshipError = {
  AlreadyExists: type('"ERR_FRIENDSHIP_REQUEST_ALREADY_EXISTS"'),
  NotPending: type('"ERR_FRIENDSHIP_REQUEST_NOT_PENDING"'),
  DoesNotExist: type('"ERR_FRIENDSHIP_REQUEST_DOES_NOT_EXIST"'),
  UserDoesNotExist: type('"ERR_FRIENDSHIP_REQUEST_USER_DOES_NOT_EXIST"'),
}

export const readAllFriendshipRequestsQuery = type({
  'userId?': 'string.integer.parse',
}).as<{ userId?: number }>()
export type ReadAllFriendshipRequestsArg = typeof readAllFriendshipRequestsQuery.infer

export const createFriendshipRequestDto = friendshipRequest.omit('status')
export type CreateFriendshipRequestDto = typeof createFriendshipRequestDto.infer

export const updateFriendshipRequestDto = friendshipRequest.pick('status')
export type UpdateFriendshipRequestDto = typeof updateFriendshipRequestDto.infer

export const friendshipRequestFullData = friendshipRequest.merge({
  user: userDto,
  targetUser: userDto,
})
export type FriendshipRequestFullData = typeof friendshipRequestFullData.infer
