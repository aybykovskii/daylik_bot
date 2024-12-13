import { Middleware } from 'telegraf'

import { botLogger } from 'shared/logger'
import { telegramUserId } from 'shared/types'

import { Users } from 'api'
import { TelegrafContext } from 'types'

export const userMiddleware: Middleware<TelegrafContext> = async (ctx, next) => {
	const userId = ctx.from?.id

	botLogger.info('called user check', { userId, user: ctx.user ?? 'user is undefined' })

	if (!userId) {
		botLogger.error('User id is not defined')
	}

	const id = telegramUserId.parse(userId)
	let user: Users.Get.ResponseBody

	try {
		await ctx.api.auth.loginCreate({ telegramUserId: id })

		user = await ctx.api.users.get(id)
	} catch (_) {
		botLogger.error(`User not found. Creating new user. Id: ${id}`)

		user = await ctx.api.users.create({
			firstName: ctx?.from?.first_name,
			lastName: ctx?.from?.last_name,
			telegramUserId: id,
		})

		await ctx.api.auth.loginCreate({ telegramUserId: user.telegramUserId })
	}

	ctx.user = user

	return next()
}
