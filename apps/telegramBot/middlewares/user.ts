import { Middleware } from 'telegraf'

import { botLogger } from 'shared/logger'
import { telegramUserId } from 'shared/types'

import { Users } from 'api'
import { TelegrafContext } from 'types'

export const userMiddleware: Middleware<TelegrafContext> = async (ctx, next) => {
	const userId = ctx.from?.id

	botLogger.info('called user check', { userId })

	if (!userId) {
		throw new Error('User id is not defined')
	}

	const id = telegramUserId.parse(userId)
	let user: Users.Get.ResponseBody

	try {
		user = await ctx.api.users.get(id)

		botLogger.info(`User found`, { telegramUserId: userId, id: user.id, fullName: user.fullName })
	} catch (_) {
		botLogger.error(`User not found. Creating new user. Id: ${id}`)

		user = await ctx.api.users.create({
			firstName: ctx?.from?.first_name,
			lastName: ctx?.from?.last_name,
			telegramUserId: id,
		})
	}

	ctx.user = user

	return next()
}
