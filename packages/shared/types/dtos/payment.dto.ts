import { z } from 'zod'

import { PrettyZod } from '../common'
import { payment, user } from '../schemas'

import { withDbId, withDbUuids } from './base.dto'

export const createPaymentDto = payment.omit({
	paymentId: true,
	idempotenceKey: true,
	status: true,
})
export type CreatePaymentDto = PrettyZod<typeof createPaymentDto>

export const updatePaymentDto = payment
	.omit({ userId: true, paymentId: true, idempotenceKey: true })
	.partial()
export type UpdatePaymentDto = PrettyZod<typeof updatePaymentDto>

export const paymentResponseDto = payment.extend(withDbUuids.shape)
export type PaymentResponseDto = PrettyZod<typeof paymentResponseDto>

export const paymentFullDataResponseDto = payment.extend({
	user: user.extend(withDbId.shape),
})
export type PaymentFullDataResponseDto = PrettyZod<typeof paymentFullDataResponseDto>

export const paymentsResponseDto = z.array(paymentResponseDto)
export type PaymentsResponseDto = PrettyZod<typeof paymentsResponseDto>
