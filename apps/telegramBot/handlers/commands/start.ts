import { Middleware } from 'telegraf'
import { z } from 'zod'

import { TelegrafContext } from 'types'

const commandsList = z.enum(['start', 'info', 'help'])

export const startCommandHandler: Middleware<TelegrafContext> = async (ctx) => {
	ctx.telegram.setMyCommands(
		commandsList.options.map((command) => ({
			command: `/${command}`,
			description: ctx.t(`bot.commands.${command}.description`),
		}))
	)

	ctx.replyT('bot.commands.start.message', { fullName: ctx.user.fullName })
}
