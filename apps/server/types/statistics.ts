import { type } from 'arktype'

import { intId, modelIntId } from './db'
import { UserDto } from './users'

export const statistics = type({
  userId: intId,
  sentRequestsCount: 'number',
  activityRating: 'number',
  createdEventsCount: 'number',
  sharedEventsCount: 'number',
  friendsCount: 'number',
})
export type Statistics = typeof statistics.infer

export const statisticsDto = statistics.merge(modelIntId)
export type StatisticsDto = typeof statisticsDto.infer

export type StatisticsFullData = StatisticsDto & {
  user: UserDto
}
