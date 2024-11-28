import { Middleware } from 'telegraf'

import { i18next } from 'shared/i18n'

import { I18nFmtString, TOptions, TelegrafContext } from 'types'

export const i18nMiddleware: Middleware<TelegrafContext> = (ctx, next) => {
	const getTranslatedMessage = (msg: I18nPhrase | I18nFmtString, tOptions: TOptions) =>
		typeof msg === 'string'
			? i18next.t(msg, tOptions)
			: {
					...msg,
					text: i18next.t(msg.text, tOptions),
				}

	ctx.sendTMessage = (msg, tOptions, opts) =>
		ctx.sendMessage(getTranslatedMessage(msg, tOptions), opts)

	ctx.replyT = (msg, tOptions, opts) => ctx.reply(getTranslatedMessage(msg, tOptions), opts)

	return next()
}
