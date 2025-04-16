import { hydrateFiles } from '@grammyjs/files'
import { Bot } from 'grammy'
import {
  callbackQueryHandler,
  getNotificationRouter,
  helpCommandHandler,
  messageHandler,
  startCommandHandler,
} from 'handlers'
import { Hono } from 'hono'

import { createApi } from 'api'
import { env } from 'shared/environment'
import { botLogger } from 'shared/logger'

import { contextMiddleware, userMiddleware } from '@/middlewares'
import { BotContext } from '@/types'

import { paymentCommandHandler } from './commands/payment'
import { preCheckoutQueryHandler } from './handlers/preCheckoutQuery'

const api = createApi({
  headers: {
    [env.AUTH_HEADER_KEY]: env.AUTH_HEADER_VALUE,
  },
})
api.baseUrl = `http://server:${env.SERVER_PORT}`

const bot = new Bot<BotContext>(env.TG_BOT_TOKEN)

bot.api.config.use(hydrateFiles(bot.token))
bot.use(contextMiddleware(api))
bot.use(userMiddleware)

bot.command('start', startCommandHandler)
bot.command('help', helpCommandHandler)
bot.command('info', (ctx) => ctx.replyT('bot.commands.info.message'))
bot.command('payment', paymentCommandHandler)
bot.command('test', (ctx) => {
  const entities = ctx.message?.entities

  console.log({ entities })
})
bot.on(':entities:bot_command', (ctx) => ctx.replyT('bot.commands.unknown'))

bot.on(':successful_payment', async (ctx) => {
  const { telegram_payment_charge_id: telegramPaymentChargeId } = ctx.message?.successful_payment!

  const pendingPayment = ctx.user.payments.find((payment) => payment.status === 'pending')

  if (!pendingPayment) {
    return ctx.api.sendMessage(ctx.user.telegramUserId, 'Произошла ошибка при оплате')
  }

  await ctx.apiV1.payments.patchByUuid(pendingPayment.id, {
    providerPaymentId: telegramPaymentChargeId,
    status: 'success',
  })

  return ctx.api.refundStarPayment(ctx.message?.chat.id!, telegramPaymentChargeId)
})

// Message
bot.on('message', messageHandler)
// Callback query
bot.on('callback_query', callbackQueryHandler)

bot.on('pre_checkout_query', preCheckoutQueryHandler)

// Error handling
bot.catch((error) => {
  botLogger.error('Occurred bot error', error)
})

bot.start()

process.once('SIGINT', () => bot.stop())
process.once('SIGTERM', () => bot.stop())

const app = new Hono()
app.route('/notifications', getNotificationRouter(bot, api))
app.get('/health', (c) => c.text('ok'))

export default {
  port: env.BOT_PORT,
  fetch: app.fetch,
}
