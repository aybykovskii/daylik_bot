import { Middleware } from 'telegraf'

import { botLogger } from 'shared/logger'
import { telegramUserId } from 'shared/types'

import { TelegrafContext } from 'types'

export const userMiddleware: Middleware<TelegrafContext> = async (ctx, next) => {
	const userId = ctx.from?.id

	botLogger.info('called user check', { userId, user: ctx.user ?? 'user is undefined' })

	if (!userId) {
		botLogger.error('User id is not defined')
	}

	const id = telegramUserId.parse(userId)
	ctx.api.auth.loginCreate({ telegramUserId: id })

	let user = await ctx.api.users.get(id)

	if (!user) {
		user = await ctx.api.users.create({
			firstName: ctx?.from?.first_name,
			lastName: ctx?.from?.last_name,
			telegramUserId: id,
		})
	}

	ctx.user = user

	return next()
}
