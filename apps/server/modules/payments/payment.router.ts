import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { emptyBody, paramsUuid } from '@/types/db'
import { paymentDto } from '@/types/payments'

import { paymentsService } from './payments.service'
import { createPaymentDto, readAllPaymentsQuery, updatePaymentDto } from './payments.types'

export const paymentsRouter = new Hono()

paymentsRouter.get(
  '/',
  createRouteDescription('Get all payments for a user', 'payments', {
    200: paymentDto.array(),
  }),
  validate(readAllPaymentsQuery.in, 'query'),
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
  }),
  validate(createPaymentDto),
  async (c) => {
    const payment = await paymentsService.create(c.req.valid('json'))

    if (payment.isErr()) {
      return c.json(payment.error, 400)
    }

    return c.json(payment.value)
  }
)

paymentsRouter.get(
  '/:uuid',
  createRouteDescription('Get a payment by UUID', 'payments', {
    200: paymentDto,
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const payment = await paymentsService.read(uuid)

    if (payment.isErr()) {
      return c.json(payment.error, 400)
    }

    return c.json(payment.value)
  }
)

paymentsRouter.patch(
  '/:uuid',
  createRouteDescription('Update a payment', 'payments', {
    200: paymentDto,
  }),
  validate(paramsUuid.in, 'param'),
  validate(updatePaymentDto),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const payment = await paymentsService.update(uuid, c.req.valid('json'))

    if (payment.isErr()) {
      return c.json(payment.error, 400)
    }

    return c.json(payment.value)
  }
)

paymentsRouter.delete(
  '/:uuid',
  createRouteDescription('Delete a payment', 'payments', {
    204: emptyBody,
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const result = await paymentsService.delete(uuid)

    if (result.isErr()) {
      return c.json(result.error, 400)
    }

    return c.status(204)
  }
)
