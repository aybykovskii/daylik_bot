import { Middleware } from 'telegraf'

import { TelegrafContext } from 'shared/types'

export const helpCommandHandler: Middleware<TelegrafContext> = async (ctx) => {
	const commands = await ctx.telegram.getMyCommands()
	const commandsList = commands
		.map((command) => `/${command.command} - ${command.description}`)
		.join('\n')

	ctx.replyT('bot.commands.help.message', { commands: commandsList })
}
