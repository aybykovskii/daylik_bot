import { Middleware } from 'grammy'

import { BotContext } from '@/types'

export const helpCommandHandler: Middleware<BotContext> = async (ctx) => {
  const commands = await ctx.api.getMyCommands()
  const commandsList = commands.map((command) => `/${command.command} - ${command.description}`).join('\n')

  ctx.replyT('bot.commands.help.message', { commands: commandsList })
}
