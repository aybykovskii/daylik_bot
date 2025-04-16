import { Middleware } from 'grammy'
import { BotContext } from 'types'
import { z } from 'zod'

import { env } from 'shared'

const commandsList = z.enum(['start', 'info', 'help', 'payment'])

export const startCommandHandler: Middleware<BotContext> = async (ctx) => {
  ctx.api.setMyCommands(
    commandsList.options.map((command) => ({
      command: `/${command}`,
      description: ctx.t(`bot.commands.${command}.description`),
    }))
  )

  ctx.api.setChatMenuButton({
    chat_id: ctx.message?.chat.id!,
    menu_button: {
      type: 'web_app',
      text: 'Планер',
      web_app: { url: env.WEB_APP_URL },
    },
  })

  ctx.replyT(
    'bot.commands.start.message',
    { fullName: ctx.user.fullName },
    { reply_markup: { inline_keyboard: [[{ text: 'Планер', url: env.WEB_APP_URL }]] } }
  )
}
