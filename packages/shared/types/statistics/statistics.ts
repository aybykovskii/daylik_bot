import { z } from 'zod'

import { Pretty } from '../common'
import { ModelBase } from '../postgre'

export const statisticsSchema = z.object({
	sentRequestsCount: z.number(),
	createdEventsCount: z.number(),
	sharedEventsCount: z.number(),
	friendsCount: z.number(),
	activityRating: z.number(),
})

export type StatisticsBase = z.infer<typeof statisticsSchema>
export type Statistics = Pretty<ModelBase & StatisticsBase>
