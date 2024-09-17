import { Middleware } from 'telegraf'

import { makeApi } from '~api'
import { i18next } from '~i18n'

import { GPT } from 'helpers'
import { TelegrafContext } from 'types'
import { env } from '~environment'

const api = makeApi()

export const contextMiddleware: Middleware<TelegrafContext> = (ctx, next) => {
	ctx.api = api
	ctx.t = i18next.t
	ctx.gpt = new GPT(env.OPENAI_API_KEY)

	return next()
}
