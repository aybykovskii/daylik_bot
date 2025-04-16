import { FileFlavor } from '@grammyjs/files'
import { Context } from 'grammy'
import { Message } from 'grammy/types'

import { Users, api } from 'api'
import { i18next } from 'shared/i18n'

import { GPT } from '@/helpers'

export type ReplyExtra = Parameters<Context['reply']>[1]
export type TOptions = Parameters<typeof i18next.t>[2]
export type MessageExtra = Parameters<Context['api']['sendMessage']>[2]

export type I18nFmtString = {
  text: I18nPhrase
}

export type I18nSendMessage = (msg: I18nPhrase, replace?: TOptions, opts?: MessageExtra) => Promise<Message.TextMessage>
export type I18nReply = (msg: I18nPhrase, replace?: TOptions, opts?: ReplyExtra) => Promise<Message.TextMessage>

export type BotContext = FileFlavor<Context> & {
  apiV1: typeof api
  user: Users.GetById.ResponseBody
  gpt: GPT
  t: (phrase: I18nPhrase, tOptions?: TOptions) => string
  sendTMessage: I18nSendMessage
  replyT: I18nReply
}
