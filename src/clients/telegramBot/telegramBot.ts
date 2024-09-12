import path from 'node:path'

import { Environment } from '~common/environment'
import { i18n } from '~common/i18n'
import { Log } from '~common/logger'

import { makeApi } from '@api'

import { Bot } from './bot'
import { botEnvSchema } from './envSchema'

const botEnv = Environment.get(botEnvSchema, [
	path.resolve(__dirname, '../../../.env'),
	path.resolve(__dirname, './.env'),
])

const bot = new Bot({
	botToken: botEnv.TG_BOT_TOKEN,
	openAIApiKey: botEnv.OPENAI_API_KEY,
	api: makeApi(),
	env: botEnv,
	i18n,
})

export const startBot = async () => {
	bot.setChatMenuButton({
		menu_button: {
			type: 'web_app',
			text: 'MiniApp',
			web_app: { url: 'https://f2ea-45-67-153-64.ngrok-free.app/' },
		},
	})
	bot.setMyCommands(bot.commands)

	bot.on('message', bot.messageHandler)
	bot.on('voice', bot.voiceHandler)
	bot.on('callback_query', bot.callbackQueryHandler)
}

startBot()
	.then(() => {
		Log.info('Bot is running')
	})
	.catch(Log.error)
