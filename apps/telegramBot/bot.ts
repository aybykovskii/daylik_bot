import express from 'express'
import { Telegraf } from 'telegraf'

import { createApi } from 'api'
import { env } from 'shared/environment'
import { botLogger } from 'shared/logger'

import {
	callbackQueryHandler,
	getNotificationRouter,
	helpCommandHandler,
	messageHandler,
	startCommandHandler,
	unknownCommandHandler,
} from 'handlers'
import { contextMiddleware, i18nMiddleware, userMiddleware } from 'middlewares'
import { TelegrafContext } from 'types'

const bot = new Telegraf<TelegrafContext>(env.TG_BOT_TOKEN)
const api = createApi({
	headers: {
		[env.AUTH_HEADER_KEY]: env.AUTH_HEADER_VALUE,
	},
})
api.baseUrl = `http://server:${env.SERVER_PORT}`

bot.use(i18nMiddleware)
bot.use(contextMiddleware(api))
bot.use(userMiddleware)

// Commands
bot
	.start(startCommandHandler)
	.help(helpCommandHandler)
	.command('info', (ctx) => ctx.replyT('bot.commands.info.message'))
	.on('message', unknownCommandHandler)

// Message
bot.on('message', messageHandler)
// Callback query
bot.on('callback_query', callbackQueryHandler)

// Error handling
bot.catch((error) => {
	botLogger.error('Occurred bot error', error)
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/notifications', getNotificationRouter(bot, api))

app.get('/health', (_, res) => {
	res.send('ok')
})
;(async () => {
	try {
		app.listen(env.BOT_PORT, async () => {
			botLogger.info(`Listening on port ${env.BOT_PORT}`)
		})
	} catch (error) {
		botLogger.error(error)
	}
})()
