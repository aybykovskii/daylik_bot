import dayjs from 'dayjs'
import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validateRole } from '@/common/validation'
import { makeErrorBody, paramsId } from '@/types/common'
import { subscriptionDto } from '@/types/subscriptions'

import { subscriptionsService } from './subscriptions.service'
import { SubscriptionError } from './subscriptions.types'

export const subscriptionsRouter = new Hono()

subscriptionsRouter.get(
  '/:id/check',
  createRouteDescription('Check subscription by id', 'subscriptions', {
    200: subscriptionDto,
    400: makeErrorBody(
      CommonError.ValidationFailed.or(SubscriptionError.PaidSubscriptionExpired)
        .or(SubscriptionError.TrialSubscriptionExpired)
        .or(SubscriptionError.Canceled)
    ),
    404: makeErrorBody(SubscriptionError.DoesNotExist),
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const subscription = await subscriptionsService.read(id)

    if (subscription.isErr()) {
      return c.json({ error: subscription.error }, 404)
    }

    const { status, type, endDate } = subscription.value

    if (status === 'canceled') {
      return c.json({ error: 'ERR_SUBSCRIPTION_CANCELED' }, 400)
    }

    const isExpiredByDate = dayjs().isAfter(dayjs(endDate))
    const isExpiredByStatus = status === 'expired'

    if (isExpiredByDate && !isExpiredByStatus) {
      await subscriptionsService.update(id, { status: 'expired' })
    }

    if (isExpiredByDate || isExpiredByStatus) {
      return c.json({ error: `ERR_${type.toUpperCase()}_SUBSCRIPTION_EXPIRED` }, 400)
    }

    return c.json(subscription.value)
  }
)

subscriptionsRouter.patch(
  '/:id/renew',
  createRouteDescription('Renew subscription by id', 'subscriptions', {
    200: subscriptionDto,
    400: makeErrorBody(CommonError.ValidationFailed),
    404: makeErrorBody(SubscriptionError.DoesNotExist),
  }),
  validateRole('admin'),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const startDate = dayjs().startOf('day')

    const updatedSubscriptionResult = await subscriptionsService.update(id, {
      type: 'paid',
      startDate: startDate.toDate(),
      endDate: startDate.add(1, 'month').toDate(),
      status: 'active',
    })

    if (updatedSubscriptionResult.isErr()) {
      return c.json({ error: updatedSubscriptionResult.error }, 400)
    }

    return c.json(updatedSubscriptionResult.value)
  }
)

subscriptionsRouter.patch(
  '/:id/cancel',
  createRouteDescription('Cancel subscription by id', 'subscriptions', {
    200: subscriptionDto,
    400: makeErrorBody(CommonError.ValidationFailed),
    404: makeErrorBody(SubscriptionError.DoesNotExist),
  }),
  validateRole('admin'),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')

    const updatedSubscriptionResult = await subscriptionsService.update(id, {
      status: 'canceled',
      endDate: dayjs().toDate(),
    })

    if (updatedSubscriptionResult.isErr()) {
      return c.json({ error: updatedSubscriptionResult.error }, 400)
    }

    return c.json(updatedSubscriptionResult.value)
  }
)
