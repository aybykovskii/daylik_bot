import { type } from 'arktype'

import { modelIntId } from './db'
import { UserDto } from './users'

export const reward = type({
  name: 'string',
  description: 'string',
})
export type Reward = typeof reward.infer

export const rewardDto = reward.merge(modelIntId)
export type RewardDto = typeof rewardDto.infer

export type RewardFullData = RewardDto & {
  users: UserDto[]
}
