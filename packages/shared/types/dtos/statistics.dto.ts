import { z } from 'zod'

import { PrettyZod } from '../common'
import { statistics, user } from '../schemas'

import { withDbId } from './base.dto'

export const createStatisticsDto = statistics.extend({
	sentRequestsCount: statistics.shape.sentRequestsCount.optional(),
	activityRating: statistics.shape.activityRating.optional(),
})
export type CreateStatisticsDto = PrettyZod<typeof createStatisticsDto>

export const updateStatisticsDto = statistics.omit({ userId: true }).partial()
export type UpdateStatisticsDto = PrettyZod<typeof updateStatisticsDto>

export const statisticsResponseDto = statistics.extend(withDbId.shape)
export type StatisticsResponseDto = PrettyZod<typeof statisticsResponseDto>

export const statisticsFullDataResponseDto = statistics.extend({
	user: user.extend(withDbId.shape),
	createdEventsCount: z.number(),
	sharedEventsCount: z.number(),
	friendsCount: z.number(),
})
export type StatisticsFullDataResponseDto = PrettyZod<typeof statisticsFullDataResponseDto>
