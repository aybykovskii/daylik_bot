import { Middleware } from 'grammy'

import { PostUsersError } from 'api'
import { botLogger } from 'shared/logger'

import { BotContext } from '@/types'

export const userMiddleware: Middleware<BotContext> = async (ctx, next) => {
  const userId = ctx.from?.id

  if (userId === ctx.me?.id) {
    return
  }

  if (!userId) {
    throw new Error('User id is not defined')
  }

  const id = userId.toString()
  const userResult = await ctx.safeApiV1.users.getById(id)

  if (userResult.isOk()) {
    ctx.user = userResult.value
    return next()
  }

  botLogger.info(`User not found. Creating new user. Id: ${id}`)

  const userCreationResult = await ctx.safeApiV1.users.post<PostUsersError>({
    firstName: ctx?.from?.first_name,
    lastName: ctx?.from?.last_name ?? null,
    telegramUserId: id,
  })

  if (userCreationResult.isOk()) {
    ctx.user = userCreationResult.value
    return next()
  }

  botLogger.error('Failed to create user', { error: userCreationResult.error })
  return ctx.replyT('bot.user.creationError')
}
