import { type } from 'arktype'

import { intId, modelIntId } from './db'
import { UserDto } from './users'

export const subscriptionType = type("'trial' | 'paid'")
export const subscriptionStatus = type("'active' | 'expired' | 'canceled'")

export const subscription = type({
  userId: intId,
  type: subscriptionType,
  startDate: 'string.date.iso',
  endDate: 'string.date.iso',
  status: subscriptionStatus,
})
export type Subscription = typeof subscription.infer

export const subscriptionDto = subscription.merge(modelIntId)
export type SubscriptionDto = typeof subscriptionDto.infer

export type SubscriptionFullData = SubscriptionDto & {
  user: UserDto
}
