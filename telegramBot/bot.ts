import express from 'express'
import { Telegraf } from 'telegraf'

import { env } from '~environment'
import { botLogger } from '~logger'

import {
	callbackQueryHandler,
	helpCommandHandler,
	messageHandler,
	startCommandHandler,
	unknownCommandHandler,
} from 'handlers'
import { contextMiddleware, i18nMiddleware, userMiddleware } from 'middlewares'
import { TelegrafContext } from 'types'

const bot = new Telegraf<TelegrafContext>(env.TG_BOT_TOKEN)

bot.use(i18nMiddleware)
bot.use(contextMiddleware)
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

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

const startBot = async () => {
	try {
		const app = express()

		app.use(express.json())

		app.listen(env.BOT_PORT, () => {
			botLogger.info(`Listening on port ${env.BOT_PORT}`)
		})
	} catch (error) {
		botLogger.error(error)
	}
}

startBot()
