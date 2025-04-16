import { Middleware } from 'grammy'

import { Users } from 'api'
import { botLogger } from 'shared/logger'

import { BotContext } from '@/types'

export const userMiddleware: Middleware<BotContext> = async (ctx, next) => {
  const userId = ctx.from?.id

  if (!userId) {
    throw new Error('User id is not defined')
  }

  const id = userId.toString()
  let user: Users.GetById.ResponseBody

  try {
    user = await ctx.apiV1.users.getById(id)
    botLogger.debug('User found', { user })
  } catch (_) {
    botLogger.error(`User not found. Creating new user. Id: ${id}`)

    user = await ctx.apiV1.users.post({
      firstName: ctx?.from?.first_name,
      lastName: ctx?.from?.last_name ?? null,
      telegramUserId: id,
    })
  }

  ctx.user = user

  return next()
}
