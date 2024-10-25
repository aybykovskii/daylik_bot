import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId, withDbUuids } from './base.schema'
import { ModelUuidBase, intId } from './postgre'
import { UserDto, user } from './user.schema'

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

export const createPaymentDto = payment.omit({
	paymentId: true,
	idempotenceKey: true,
	status: true,
})
export type CreatePaymentDto = Pretty<z.infer<typeof createPaymentDto>>

export const updatePaymentDto = payment
	.omit({ userId: true, paymentId: true, idempotenceKey: true })
	.partial()
export type UpdatePaymentDto = Pretty<z.infer<typeof updatePaymentDto>>

export const paymentResponseDto = payment.extend(withDbUuids.shape)
export type PaymentResponseDto = Pretty<z.infer<typeof paymentResponseDto>>

export const paymentFullDataResponseDto = payment.extend({
	user: user.extend(withDbId.shape),
})
export type PaymentFullDataResponseDto = Pretty<z.infer<typeof paymentFullDataResponseDto>>

export const paymentsResponseDto = z.array(paymentResponseDto)
export type PaymentsResponseDto = Pretty<z.infer<typeof paymentsResponseDto>>
