import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase } from './postgre'
import { UserDto } from './user.schema'

export const statistics = z.object({
	userId: z.number(),
	sentRequestsCount: z.number(),
	activityRating: z.number(),
})

export type StatisticsBase = z.infer<typeof statistics>
export type StatisticsDto = Pretty<
	ModelIntBase &
		StatisticsBase & {
			createdEventsCount: number
			sharedEventsCount: number
			friendsCount: number
		}
>

export type StatisticsFullData = StatisticsDto & {
	user: UserDto
}
