import { InlineKeyboard, Middleware } from 'grammy'

import { env, getIsPaymentRefundable } from 'shared'

import { BotContext } from '@/types'

import { Payments } from './payment'

export class CommandHandlers {
  static REFUND_COMMAND_REGEX = /\/refund\?paymentId=(.+)/

  static webAppKeyboard = new InlineKeyboard().webApp('Планер', env.WEB_APP_URL)

  static start: Middleware<BotContext> = async (ctx) =>
    ctx.replyT(
      'bot.commands.start.message',
      { fullName: ctx.user.fullName },
      { reply_markup: CommandHandlers.webAppKeyboard }
    )

  static help: Middleware<BotContext> = async (ctx) => {
    const commands = await ctx.api.getMyCommands()
    const commandsList = commands.map((command) => `/${command.command} - ${command.description}`).join('\n')

    ctx.replyT('bot.commands.help.message', { commands: commandsList })
  }

  static info: Middleware<BotContext> = async (ctx) => ctx.replyT('bot.commands.info.message')

  static unknown: Middleware<BotContext> = async (ctx) => ctx.replyT('bot.commands.unknown')

  static payment: Middleware<BotContext> = async (ctx) => {
    if (ctx.user.subscription.status === 'active') {
      return ctx.replyT(`bot.subscription.active.${ctx.user.subscription.type}`)
    }

    return Payments.createStarsPaymentInvoice(ctx)
  }

  static requestRefund: Middleware<BotContext> = async (ctx) => {
    const availablePayments = ctx.user.payments.filter(getIsPaymentRefundable)

    if (!availablePayments.length) {
      return ctx.replyT('bot.commands.request_refund.paymentsNotFound')
    }

    return Payments.sendRefundablePayments(ctx)
  }

  static refund: Middleware<BotContext> = async (ctx) => {
    const match = ctx.message?.text?.match(CommandHandlers.REFUND_COMMAND_REGEX)

    if (!match) {
      return ctx.replyT('bot.commands.refund.invalidFormat')
    }

    return Payments.refundPayment(ctx, match[1])
  }
}
