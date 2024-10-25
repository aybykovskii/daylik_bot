import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { ModelIntBase } from './postgre'
import { UserDto, user } from './user.schema'

export const reward = z.object({
	name: z.string(),
	description: z.string(),
})

export type RewardBase = z.infer<typeof reward>
export type RewardDto = Pretty<ModelIntBase & RewardBase>

export type RewardFullData = RewardDto & {
	users: UserDto[]
}

export const createRewardDto = reward
export type CreateRewardDto = Pretty<z.infer<typeof createRewardDto>>

export const updateRewardDto = reward.omit({ name: true })
export type UpdateRewardDto = Pretty<z.infer<typeof updateRewardDto>>

export const rewardResponseDto = reward.extend(withDbId.shape)
export type RewardResponseDto = Pretty<z.infer<typeof rewardResponseDto>>

export const rewardFullDataResponseDto = reward.extend({
	user: user.extend(withDbId.shape),
})
export type RewardFullDataResponseDto = Pretty<z.infer<typeof rewardFullDataResponseDto>>

export const rewardsResponseDto = z.array(rewardResponseDto)
export type RewardsResponseDto = Pretty<z.infer<typeof rewardsResponseDto>>
