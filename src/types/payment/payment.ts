import { z } from 'zod'

import { Pretty } from '../common'
import { ModelBase, modelId } from '../postgre'

export const paymentStatus = z.enum(['pending', 'in_progress', 'success', 'failed'])
export type PaymentStatus = z.infer<typeof paymentStatus>

export const paymentBase = z.object({
	userId: modelId,
	paymentId: z.string(),
	idempotenceKey: z.string(),
	amount: z.number(),
	status: paymentStatus,
})

export type PaymentBase = z.infer<typeof paymentBase>

export type Payment = Pretty<ModelBase & PaymentBase>
