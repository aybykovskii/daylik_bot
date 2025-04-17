import { Middleware } from 'grammy'

import { GetSubscriptionsByIdCheckError } from 'api'

import { BotContext } from '@/types'

const subscriptionErrorMessages: Partial<Record<GetSubscriptionsByIdCheckError['error'], I18nPhrase>> = {
  ERR_TRIAL_SUBSCRIPTION_EXPIRED: 'bot.subscription.ended.trial',
  ERR_PAID_SUBSCRIPTION_EXPIRED: 'bot.subscription.ended.paid',
  ERR_SUBSCRIPTION_CANCELED: 'bot.subscription.ended.canceled',
}

export const subscriptionMiddleware: Middleware<BotContext> = async (ctx, next) => {
  const userId = ctx.user.id

  const checkResult = await ctx.safeApiV1.subscriptions.getByIdCheck<GetSubscriptionsByIdCheckError>(
    ctx.user.subscription.id
  )

  if (checkResult.isErr()) {
    const errorMessage = subscriptionErrorMessages[checkResult.error.error]

    return errorMessage ? ctx.replyT(errorMessage) : ctx.replyT('bot.subscription.checkError')
  }

  ctx.apiV1.users.patchByIdIncreaseRequestsCount(userId)

  return next()
}
