import { type } from 'arktype'

import { statistics } from '@/types/statistics'

export const statisticsError = type(`
  'ERR_STATISTICS_DOES_NOT_EXIST'
  | 'ERR_STATISTICS_ALREADY_EXISTS'
`)
export type StatisticsError = typeof statisticsError.infer

export const createStatisticsDto = statistics.pick('userId')
export type CreateStatisticsDto = typeof createStatisticsDto.infer

export const updateStatisticsDto = statistics.pick('sentRequestsCount', 'activityRating').partial()
export type UpdateStatisticsDto = typeof updateStatisticsDto.infer
