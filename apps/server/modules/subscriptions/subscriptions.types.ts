import { type } from 'arktype'

import { IntId } from '@/types/db'
import { subscription } from '@/types/subscriptions'

export const SubscriptionError = {
  DoesNotExist: type('"ERR_SUBSCRIPTION_DOES_NOT_EXIST"'),
  AlreadyExists: type('"ERR_SUBSCRIPTION_ALREADY_EXISTS"'),
  UpdateFailed: type('"ERR_SUBSCRIPTION_UPDATE_FAILED"'),
  TrialSubscriptionExpired: type('"ERR_TRIAL_SUBSCRIPTION_EXPIRED"'),
  PaidSubscriptionExpired: type('"ERR_PAID_SUBSCRIPTION_EXPIRED"'),
  Canceled: type('"ERR_SUBSCRIPTION_CANCELED"'),
}

export const createSubscriptionDto = subscription.pick('userId', 'startDate', 'endDate').as<{
  userId: IntId
  startDate: Date
  endDate: Date
}>()
export type CreateSubscriptionDto = typeof createSubscriptionDto.infer

export const updateSubscriptionDto = subscription.omit('userId').partial()
export type UpdateSubscriptionDto = Omit<typeof updateSubscriptionDto.infer, 'startDate' | 'endDate'> & {
  startDate?: Date
  endDate?: Date
}
