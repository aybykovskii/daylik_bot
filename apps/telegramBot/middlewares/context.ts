import { Middleware } from 'telegraf'

import { api } from 'api'
import { env } from 'shared/environment'
import { i18next } from 'shared/i18n'

import { GPT } from 'helpers'
import { TelegrafContext } from 'types'

export const contextMiddleware =
	(apiClass: typeof api): Middleware<TelegrafContext> =>
	(ctx, next) => {
		ctx.t = i18next.t
		ctx.gpt = new GPT(env.OPENAI_API_KEY)
		ctx.api = apiClass

		return next()
	}
