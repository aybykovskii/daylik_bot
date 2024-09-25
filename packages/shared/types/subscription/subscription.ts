import { z } from 'zod'

import { Pretty } from '../common'
import { ModelBase } from '../postgre'

export const subscriptionType = z.enum(['trial', 'paid'])
export const subscriptionStatus = z.enum(['active', 'expired', 'canceled'])

export const subscriptionSchema = z.object({
	type: subscriptionType,
	startDate: z.date(),
	endDate: z.date(),
	status: subscriptionStatus,
	freeOperationsLeft: z.number(),
})

export type SubscriptionBase = z.infer<typeof subscriptionSchema>
export type Subscription = Pretty<ModelBase & SubscriptionBase>
