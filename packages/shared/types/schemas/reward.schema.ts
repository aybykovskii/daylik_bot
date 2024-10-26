import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase } from './postgre'
import { UserDto } from './user.schema'

export const reward = z.object({
	name: z.string(),
	description: z.string(),
})

export type RewardBase = z.infer<typeof reward>
export type RewardDto = Pretty<ModelIntBase & RewardBase>

export type RewardFullData = RewardDto & {
	users: UserDto[]
}
