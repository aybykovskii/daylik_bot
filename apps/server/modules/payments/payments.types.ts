import { type } from 'arktype'

import { payment } from '@/types/payments'
import { userDto } from '@/types/users'

export const PaymentsError = {
  DoesNotExist: type('"ERR_PAYMENT_DOES_NOT_EXIST"'),
  AlreadyExists: type('"ERR_PAYMENT_ALREADY_EXISTS"'),
}

export const readAllPaymentsQuery = type({
  'userId?': 'string.integer.parse',
}).as<{ userId?: number }>()
export type ReadAllPaymentsArg = typeof readAllPaymentsQuery.infer

export const createPaymentDto = payment
  .omit('paymentId', 'idempotenceKey', 'status', 'provider', 'providerPaymentId')
  .merge({
    'provider?': 'string',
    'providerPaymentId?': 'string',
  })
export type CreatePaymentDto = typeof createPaymentDto.infer

export const updatePaymentDto = payment.omit('userId', 'paymentId', 'idempotenceKey').partial()
export type UpdatePaymentDto = typeof updatePaymentDto.infer

export const paymentFullData = payment.merge({
  user: userDto,
})
