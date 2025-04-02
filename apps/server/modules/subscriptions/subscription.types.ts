import { type } from 'arktype'

import { subscription } from '@/types/subscriptions'

export const subscriptionError = type(`
  'ERR_SUBSCRIPTION_DOES_NOT_EXIST'
  | 'ERR_SUBSCRIPTION_ALREADY_EXISTS'
  | 'ERR_SUBSCRIPTION_UPDATE_FAILED'
`)
export type SubscriptionError = typeof subscriptionError.infer

export const createSubscriptionDto = subscription.pick('userId', 'startDate', 'endDate')
export type CreateSubscriptionDto = typeof createSubscriptionDto.infer

export const updateSubscriptionDto = subscription.omit('userId').partial()
export type UpdateSubscriptionDto = typeof updateSubscriptionDto.infer
