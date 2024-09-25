import { Middleware } from 'telegraf'

import { Api } from 'api'
import { env } from 'shared/environment'
import { i18next } from 'shared/i18n'

import { GPT } from 'helpers'
import { TelegrafContext } from 'types'

export const contextMiddleware =
	(api: Api): Middleware<TelegrafContext> =>
	(ctx, next) => {
		ctx.api = api
		ctx.t = i18next.t
		ctx.gpt = new GPT(env.OPENAI_API_KEY)

		return next()
	}
