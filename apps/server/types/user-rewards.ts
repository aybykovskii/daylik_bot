import { type } from 'arktype'

import { intId, modelIntId } from './db'

export const userRewardConnection = type({
  userId: intId,
  rewardId: intId,
})
export type UserRewardConnection = typeof userRewardConnection.infer

export const userRewardConnectionDto = userRewardConnection.merge(modelIntId)
export type UserRewardConnectionDto = typeof userRewardConnectionDto.infer
