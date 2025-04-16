import { Middleware } from 'grammy'
import { BotContext } from 'types'

export const unknownCommandHandler: Middleware<BotContext> = async (ctx, next) => {
  if (!ctx.entities('bot_command').length) {
    return next()
  }

  ctx.replyT('bot.commands.unknown')
}
