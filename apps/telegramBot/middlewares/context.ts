import { Middleware } from 'grammy'

import { ApisV1 } from 'api'
import { env } from 'shared/environment'
import { i18next } from 'shared/i18n'

import { GPT } from '@/helpers'
import { BotContext, MessageExtra, ReplyExtra } from '@/types'

export const contextMiddleware =
  (apis: ApisV1): Middleware<BotContext> =>
  (ctx, next) => {
    ctx.t = i18next.t
    ctx.gpt = new GPT(env.OPENAI_API_KEY)
    ctx.apiV1 = apis.api
    ctx.safeApiV1 = apis.safeApi

    ctx.sendTMessage = (msg, tOptions, extra: MessageExtra) =>
      ctx.api.sendMessage(ctx.user.telegramUserId, i18next.t(msg, tOptions), extra)
    ctx.replyT = (msg, tOptions, extra: ReplyExtra) => ctx.reply(i18next.t(msg, tOptions), extra)

    return next()
  }
