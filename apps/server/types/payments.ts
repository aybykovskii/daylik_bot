import { type } from 'arktype'

import { intId, modelUuidId } from './db'
import { UserDto } from './users'

export const paymentStatus = type("'pending' | 'in_progress' | 'success' | 'failed' | 'canceled'")

export const payment = type({
  userId: intId,
  paymentId: 'string.uuid',
  idempotenceKey: 'string.uuid',
  amount: 'number',
  status: paymentStatus,
  currency: 'string',
  description: 'string',
  provider: 'string | null',
  providerPaymentId: 'string | null',
})
export type Payment = typeof payment.infer

export const paymentDto = payment.merge(modelUuidId)
export type PaymentDto = typeof paymentDto.infer

export type PaymentFullData = PaymentDto & {
  user: UserDto
}
