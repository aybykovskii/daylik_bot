import { z } from 'zod'

import { Pretty } from '../common'

import { ModelUuidBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const paymentStatus = z.enum(['pending', 'in_progress', 'success', 'failed', 'canceled'])

export const payment = z.object({
	userId: intId,
	paymentId: z.string().uuid(),
	idempotenceKey: z.string().uuid(),
	amount: z.number(),
	status: paymentStatus,
	currency: z.string(),
	description: z.string(),
})

export type PaymentStatus = z.infer<typeof paymentStatus>

export type PaymentBase = z.infer<typeof payment>
export type PaymentDto = Pretty<ModelUuidBase & PaymentBase>

export type PaymentFullData = PaymentDto & {
	user: UserDto
}
