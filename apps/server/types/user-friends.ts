import { type } from 'arktype'

import { intId, modelIntId } from './db'

export const userFriendConnection = type({
  userId: intId,
  friendId: intId,
})
export type UserFriendConnection = typeof userFriendConnection.infer

export const userFriendConnectionDto = userFriendConnection.merge(modelIntId)
export type UserFriendConnectionDto = typeof userFriendConnectionDto.infer
