import { z } from 'zod'

import { PrettyZod } from '../common'
import { reward, user } from '../schemas'

import { withDbId } from './base.dto'

export const createRewardDto = reward
export type CreateRewardDto = PrettyZod<typeof createRewardDto>

export const updateRewardDto = reward.omit({ name: true })
export type UpdateRewardDto = PrettyZod<typeof updateRewardDto>

export const rewardResponseDto = reward.extend(withDbId.shape)
export type RewardResponseDto = PrettyZod<typeof rewardResponseDto>

export const rewardFullDataResponseDto = reward.extend({
	user: user.extend(withDbId.shape),
})
export type RewardFullDataResponseDto = PrettyZod<typeof rewardFullDataResponseDto>

export const rewardsResponseDto = z.array(rewardResponseDto)
export type RewardsResponseDto = PrettyZod<typeof rewardsResponseDto>
