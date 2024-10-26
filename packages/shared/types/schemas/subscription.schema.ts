import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase, dbDateTime, intId } from './postgre'
import { UserDto } from './user.schema'

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
