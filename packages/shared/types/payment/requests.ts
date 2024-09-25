import { Payment } from './payment'

export type CreatePaymentArg = Pick<Payment, 'userId' | 'amount'>
