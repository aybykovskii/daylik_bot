import { Context } from 'telegraf'
import { FmtString } from 'telegraf/format'
import { Convenience, Message } from 'telegraf/types'

import { makeApi } from 'api'
import { i18next } from 'shared/i18n'
import { UserFullData } from 'shared/types'

import { GPT } from 'helpers'

type ReplyExtra = Parameters<Context['reply']>[1]
export type TOptions = Parameters<typeof i18next.t>[2]

export type I18nFmtString = FmtString & {
	text: I18nPhrase
}

export type I18nSendMessage = (
	msg: I18nPhrase | I18nFmtString,
	replace?: TOptions,
	opts?: Convenience.ExtraReplyMessage
) => Promise<Message.TextMessage>

export type I18nReply = (
	msg: I18nPhrase | I18nFmtString,
	replace?: TOptions,
	opts?: ReplyExtra
) => Promise<Message.TextMessage>

export interface TelegrafContext extends Context {
	api: ReturnType<typeof makeApi>
	user: UserFullData
	t: (phrase: I18nPhrase, tOptions?: TOptions) => string
	gpt: GPT
	sendTMessage: I18nSendMessage
	replyT: I18nReply
}
