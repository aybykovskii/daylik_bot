import { Hono } from 'hono'

import { serverLogger } from 'shared'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validateResponseUserId, validateRole } from '@/common/validation'
import { emptySuccessBody, makeErrorBody, paramsUuid, successBody } from '@/types/common'
import { paymentDto } from '@/types/payments'

import { paymentsService } from './payments.service'
import { PaymentsError, createPaymentDto, readAllPaymentsQuery, updatePaymentDto } from './payments.types'

export const paymentsRouter = new Hono()

paymentsRouter.get(
  '/',
  createRouteDescription('Get all payments for a user', 'payments', {
    200: paymentDto.array(),
    400: makeErrorBody(CommonError.ValidationFailed),
    403: makeErrorBody(CommonError.InvalidUserRole),
  }),
  validate(readAllPaymentsQuery.in, 'query'),
  validateRole('staff'),
  async (c) => {
    const { userId } = c.req.valid('query')
    const payments = await paymentsService.readAll({ userId })

    return c.json(payments.value)
  }
)

paymentsRouter.post(
  '/',
  createRouteDescription('Create a payment', 'payments', {
    201: paymentDto,
    400: makeErrorBody(CommonError.ValidationFailed),
  }),
  validate(createPaymentDto),
  async (c) => {
    const body = c.req.valid('json')
    const payment = await paymentsService.create(body)

    if (payment.isErr()) {
      return c.json(payment.error, 400)
    }

    const { id: uuid, userId, amount, currency } = payment.value

    serverLogger.info('Payment created', { uuid, userId, amount, currency })

    return validateResponseUserId(c, payment.value)
  }
)

paymentsRouter.get(
  '/:uuid',
  createRouteDescription('Get a payment by UUID', 'payments', {
    200: paymentDto,
    400: makeErrorBody(CommonError.ValidationFailed.or(PaymentsError.DoesNotExist)),
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const payment = await paymentsService.read(uuid)

    if (payment.isErr()) {
      return c.json(payment.error, 400)
    }

    return validateResponseUserId(c, payment.value)
  }
)

paymentsRouter.patch(
  '/:uuid',
  createRouteDescription('Update a payment', 'payments', {
    200: paymentDto,
    400: makeErrorBody(CommonError.ValidationFailed.or(PaymentsError.DoesNotExist)),
  }),
  validate(paramsUuid.in, 'param'),
  validate(updatePaymentDto),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const body = c.req.valid('json')
    const payment = await paymentsService.update(uuid, body)

    if (payment.isErr()) {
      return c.json(payment.error, 400)
    }

    const { userId, amount, currency, status } = payment.value

    serverLogger.info('Payment updated', { uuid, userId, amount, currency, status })

    return validateResponseUserId(c, payment.value)
  }
)

paymentsRouter.delete(
  '/:uuid',
  createRouteDescription('Delete a payment', 'payments', {
    200: successBody,
    400: makeErrorBody(CommonError.ValidationFailed.or(PaymentsError.DoesNotExist)),
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const result = await paymentsService.delete(uuid)

    if (result.isErr()) {
      return c.json(result.error, 400)
    }

    return c.json(emptySuccessBody)
  }
)
