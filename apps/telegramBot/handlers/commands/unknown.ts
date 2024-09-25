import { Middleware } from 'telegraf'

import { TelegrafContext } from 'shared/types'

export const unknownCommandHandler: Middleware<TelegrafContext> = async (ctx, next) => {
	if (!ctx.entities('bot_command').length) {
		return next()
	}

	ctx.replyT('bot.commands.unknown')
}
