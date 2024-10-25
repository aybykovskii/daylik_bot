import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { ModelIntBase, dbDateTime, intId } from './postgre'
import { UserDto, user } from './user.schema'

export const subscriptionType = z.enum(['trial', 'paid'])
export const subscriptionStatus = z.enum(['active', 'expired', 'canceled'])

export const subscription = z.object({
	userId: intId,
	type: subscriptionType,
	startDate: dbDateTime,
	endDate: dbDateTime,
	status: subscriptionStatus,
})

export type SubscriptionType = z.infer<typeof subscriptionType>
export type SubscriptionStatus = z.infer<typeof subscriptionStatus>

export type SubscriptionBase = z.infer<typeof subscription>
export type SubscriptionDto = Pretty<ModelIntBase & SubscriptionBase>

export type SubscriptionFullData = SubscriptionDto & {
	user: UserDto
}

export const createSubscriptionDto = subscription.omit({ type: true, status: true })
export type CreateSubscriptionDto = Pretty<z.infer<typeof createSubscriptionDto>>

export const updateSubscriptionDto = subscription.omit({ userId: true }).partial()
export type UpdateSubscriptionDto = Pretty<z.infer<typeof updateSubscriptionDto>>

export const subscriptionResponseDto = subscription.extend(withDbId.shape)
export type SubscriptionResponseDto = Pretty<z.infer<typeof subscriptionResponseDto>>

export const subscriptionFullDataResponseDto = subscription.extend({
	user: user.extend(withDbId.shape),
})
export type SubscriptionFullDataResponseDto = Pretty<
	z.infer<typeof subscriptionFullDataResponseDto>
>
