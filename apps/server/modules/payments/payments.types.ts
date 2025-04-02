import { type } from 'arktype'

import { payment } from '@/types/payments'
import { userDto } from '@/types/users'

export const paymentsError = type(`
  'ERR_PAYMENT_DOES_NOT_EXIST'
  | 'ERR_PAYMENT_ALREADY_EXISTS'
`)
export type PaymentsError = typeof paymentsError.infer

export const readAllPaymentsQuery = type({
  'userId?': 'string.integer.parse',
}).as<{ userId?: number }>()
export type ReadAllPaymentsArg = typeof readAllPaymentsQuery.infer

export const createPaymentDto = payment.omit('paymentId', 'idempotenceKey', 'status')
export type CreatePaymentDto = typeof createPaymentDto.infer

export const updatePaymentDto = payment.omit('userId', 'paymentId', 'idempotenceKey')
export type UpdatePaymentDto = typeof updatePaymentDto.infer

export const paymentFullData = payment.merge({
  user: userDto,
})
