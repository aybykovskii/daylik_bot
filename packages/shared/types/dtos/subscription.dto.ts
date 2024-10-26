import { PrettyZod } from '../common'
import { subscription, user } from '../schemas'

import { withDbId } from './base.dto'

export const createSubscriptionDto = subscription.omit({ type: true, status: true })
export type CreateSubscriptionDto = PrettyZod<typeof createSubscriptionDto>

export const updateSubscriptionDto = subscription.omit({ userId: true }).partial()
export type UpdateSubscriptionDto = PrettyZod<typeof updateSubscriptionDto>

export const subscriptionResponseDto = subscription.extend(withDbId.shape)
export type SubscriptionResponseDto = PrettyZod<typeof subscriptionResponseDto>

export const subscriptionFullDataResponseDto = subscription.extend({
	user: user.extend(withDbId.shape),
})
export type SubscriptionFullDataResponseDto = PrettyZod<typeof subscriptionFullDataResponseDto>
