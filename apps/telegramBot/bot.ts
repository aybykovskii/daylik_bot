import { hydrateFiles } from '@grammyjs/files'
import Bun from 'bun'
import { Bot } from 'grammy'
import { Hono } from 'hono'

import { createApi } from 'api'
import { notificationsQueue } from 'shared'
import { env } from 'shared/environment'
import { botLogger } from 'shared/logger'

import { CommandHandlers, Payments, callbackQueryHandler, messageHandler } from '@/handlers'
import { configMiddleware, contextMiddleware, subscriptionMiddleware, userMiddleware } from '@/middlewares'
import { getNotificationRouter } from '@/router'
import { BotContext } from '@/types'

const apis = createApi({
  baseUrl: `http://server:${env.SERVER_PORT}`,
  headers: { [env.AUTH_HEADER_KEY]: env.AUTH_HEADER_VALUE },
})

const bot = new Bot<BotContext>(env.TG_BOT_TOKEN)

bot.api.config.use(hydrateFiles(bot.token))
bot.use(contextMiddleware(apis))
bot.use(userMiddleware)
bot.use(configMiddleware)

bot.command('start', CommandHandlers.start)
bot.command('help', CommandHandlers.help)
bot.command('info', CommandHandlers.info)
bot.command('payment', CommandHandlers.payment)
bot.command('request_refund', CommandHandlers.requestRefund)
bot.command('refund', CommandHandlers.refund)
bot.on(':entities:bot_command', CommandHandlers.unknown)

bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true))
bot.on(':successful_payment', Payments.successfulPaymentHandler)

bot.on('message', subscriptionMiddleware, messageHandler)
bot.on('callback_query:data', callbackQueryHandler)

bot.catch((error) => botLogger.error('Occurred bot error', error))

bot.start()

// Message broker
notificationsQueue.consume(({ message, telegramUserId }) => bot.api.sendMessage(telegramUserId, message))

// Router
const root = new Hono()

root.route('/notifications', getNotificationRouter(apis.api))
root.get('/health', (c) => c.text('ok'))

const server = Bun.serve({
  port: env.BOT_PORT,
  fetch: root.fetch,
  development: false,
})

process.once('SIGTERM', async () => {
  await bot.stop()
  await server.stop()
  process.exit(0)
})

export default server
