import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { ModelIntBase } from './postgre'
import { UserDto, user } from './user.schema'

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

export const createStatisticsDto = statistics.extend({
	sentRequestsCount: statistics.shape.sentRequestsCount.optional(),
	activityRating: statistics.shape.activityRating.optional(),
})
export type CreateStatisticsDto = Pretty<z.infer<typeof createStatisticsDto>>

export const updateStatisticsDto = statistics.omit({ userId: true }).partial()
export type UpdateStatisticsDto = Pretty<z.infer<typeof updateStatisticsDto>>

export const statisticsResponseDto = statistics.extend(withDbId.shape)
export type StatisticsResponseDto = Pretty<z.infer<typeof statisticsResponseDto>>

export const statisticsFullDataResponseDto = statistics.extend({
	user: user.extend(withDbId.shape),
	createdEventsCount: z.number(),
	sharedEventsCount: z.number(),
	friendsCount: z.number(),
})
export type StatisticsFullDataResponseDto = Pretty<z.infer<typeof statisticsFullDataResponseDto>>
