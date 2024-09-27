import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase } from './postgre'
import { UserDto } from './user.schema'

export const userStatistics = z.object({
	userId: z.number(),
	sentRequestsCount: z.number(),
	createdEventsCount: z.number(),
	sharedEventsCount: z.number(),
	friendsCount: z.number(),
	activityRating: z.number(),
})

export type UserStatisticsBase = z.infer<typeof userStatistics>
export type UserStatisticsDto = Pretty<ModelIntBase & UserStatisticsBase>

export type UserStatisticsFullData = UserStatisticsDto & {
	user: UserDto
}
