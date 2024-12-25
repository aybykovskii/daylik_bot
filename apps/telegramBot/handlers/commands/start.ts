import { Middleware } from 'telegraf'
import { z } from 'zod'

import { env } from 'shared'
import { TelegrafContext } from 'types'

const commandsList = z.enum(['start', 'info', 'help'])

export const startCommandHandler: Middleware<TelegrafContext> = async (ctx) => {
	ctx.telegram.setMyCommands(
		commandsList.options.map((command) => ({
			command: `/${command}`,
			description: ctx.t(`bot.commands.${command}.description`),
		}))
	)

	ctx.setChatMenuButton({
		type: 'web_app',
		text: 'Планер',
		web_app: { url: env.WEB_APP_URL },
	})

	ctx.replyT(
		'bot.commands.start.message',
		{ fullName: ctx.user.fullName },
		{ reply_markup: { inline_keyboard: [[{ text: 'Планер', url: env.WEB_APP_URL }]] } }
	)
}
