import dayjs from 'dayjs'
import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate } from '@/common/validation'
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
      CommonError.ValidationFailed.or(SubscriptionError.PaidSubscriptionExpired).or(
        SubscriptionError.TrialSubscriptionExpired
      )
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
