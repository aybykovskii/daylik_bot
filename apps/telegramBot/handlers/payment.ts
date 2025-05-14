import dayjs from 'dayjs'
import { InlineKeyboard, Middleware } from 'grammy'

import { env, getIsPaymentRefundable } from 'shared'

import { getImageUrl } from '@/helpers'
import { refundCreationCD } from '@/helpers/callbackData'
import { BotContext } from '@/types'

export class Payments {
  static PAYMENT_DATE_FORMAT = 'DD.MM'

  static CURRENCY_EMOJI: Record<string, string> = {
    XTR: '⭐',
    RUB: '₽',
    USD: '$',
  }

  static createStarsPaymentInvoice = async (ctx: BotContext) => {
    const currency = 'XTR'
    const starsPayload = 'subscription_xtr'
    const amount = env.SUBSCRIPTION_STARS_AMOUNT
    const description = ctx.t('bot.subscription.stars.description')

    const paymentKeyboard = new InlineKeyboard().pay(
      ctx.t('bot.subscription.stars.buttonLabel', { amount, currency: Payments.CURRENCY_EMOJI[currency] })
    )

    await ctx.apiV1.payments.post({
      userId: ctx.user.id,
      type: 'subscription',
      amount,
      currency,
      description,
      provider: 'telegram',
    })

    return ctx.api.sendInvoice(
      ctx.user.telegramUserId,
      ctx.t('bot.subscription.stars.title'),
      description,
      starsPayload,
      currency,
      [{ label: ctx.t('bot.subscription.stars.paymentLabel'), amount }],
      {
        reply_markup: paymentKeyboard,
        photo_width: 512,
        photo_height: 512,
        photo_url: getImageUrl('payment_XTR.jpeg'),
      }
    )
  }

  static successfulPaymentHandler: Middleware<BotContext> = async (ctx) => {
    const { telegram_payment_charge_id: telegramPaymentChargeId } = ctx.message?.successful_payment!

    const pendingPayment = ctx.user.payments.find((payment) => payment.status === 'pending')

    if (!pendingPayment) {
      ctx.replyT('bot.starsPayment.unknownError')
      ctx.api.refundStarPayment(ctx.user.id, telegramPaymentChargeId)
      return
    }

    await ctx.apiV1.payments.patchByUuid(pendingPayment.id, {
      providerPaymentId: telegramPaymentChargeId,
      status: 'success',
    })

    const message = await ctx.replyT('bot.starsPayment.success')

    await ctx.apiV1.subscriptions.patchByIdRenew(ctx.user.subscription.id)

    return ctx.api.editMessageText(ctx.user.telegramUserId, message.message_id, ctx.t('bot.subscription.renewed'))
  }

  static refundPayment = async (ctx: BotContext, paymentUuid: string) => {
    const paymentResult = await ctx.safeApiV1.payments.getByUuid(paymentUuid)

    if (paymentResult.isErr()) {
      return ctx.replyT('bot.refund.paymentNotFound')
    }

    const payment = paymentResult.value

    if (!getIsPaymentRefundable(payment)) {
      return ctx.replyT('bot.refund.paymentNotRefundable')
    }

    if (!payment.providerPaymentId) {
      return ctx.replyT('bot.refund.providerPaymentIdNotFound')
    }

    const refund = await ctx.apiV1.payments.post({
      ...payment,
      type: 'refund',
      provider: payment.provider ?? undefined,
      providerPaymentId: payment.providerPaymentId ?? undefined,
    })

    await ctx.apiV1.payments.patchByUuid(payment.id, {
      status: 'refunded',
    })

    await ctx.api.refundStarPayment(+ctx.user.telegramUserId, payment.providerPaymentId)

    await ctx.apiV1.payments.patchByUuid(refund.id, {
      status: 'success',
    })

    await ctx.apiV1.subscriptions.patchByIdCancel(ctx.user.subscription.id)

    return ctx.replyT('bot.refund.refundSuccess', {
      amount: payment.amount,
      currency: Payments.CURRENCY_EMOJI[payment.currency],
      date: dayjs(payment.createdAt).format(Payments.PAYMENT_DATE_FORMAT),
    })
  }

  static sendRefundablePayments = async (ctx: BotContext) => {
    const refundablePayments = ctx.user.payments.filter(getIsPaymentRefundable)

    const keyboard = new InlineKeyboard()

    for (const { id, amount, currency, updatedAt } of refundablePayments) {
      const currencyEmoji = Payments.CURRENCY_EMOJI[currency]
      const date = dayjs(updatedAt).format(Payments.PAYMENT_DATE_FORMAT)

      keyboard.text(`${amount} ${currencyEmoji} от ${date}`, refundCreationCD.fill({ paymentId: id })).row()
    }

    return ctx.replyT('bot.commands.request_refund.message', {}, { reply_markup: keyboard })
  }
}
