import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase, intId } from './postgre'
import { RewardDto } from './reward.schema'
import { UserDto } from './user.schema'

export const userRewardConnection = z.object({
	userId: intId,
	rewardId: intId,
})

export type UserRewardConnectionBase = z.infer<typeof userRewardConnection>
export type UserRewardConnectionDto = Pretty<ModelIntBase & UserRewardConnectionBase>

export type UserRewardConnectionFullData = UserRewardConnectionDto & {
	user: UserDto
	reward: RewardDto
}
