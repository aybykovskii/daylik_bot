import { Middleware } from 'grammy'
import { z } from 'zod'

import { env } from 'shared'

import { BotContext } from '@/types/context'

const commandsList = z.enum(['start', 'info', 'help', 'payment', 'request_refund'])

export const configMiddleware: Middleware<BotContext> = async (ctx, next) => {
  ctx.api.setMyCommands(
    commandsList.options.map((command) => ({
      command: `/${command}`,
      description: ctx.t(`bot.commands.${command}.description`),
    })),
    {
      scope: {
        type: 'chat',
        chat_id: +ctx.user.telegramUserId,
      },
    }
  )

  ctx.api.setChatMenuButton({
    chat_id: +ctx.user.telegramUserId,
    menu_button: {
      type: 'web_app',
      text: 'Планер',
      web_app: { url: env.WEB_APP_URL },
    },
  })

  return next()
}
