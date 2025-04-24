import { CustomInstanceExtenstions } from 'i18next'

import bot from './i18n/ru/bot.json'
import common from './i18n/ru/common.json'
import miniApp from './i18n/ru/miniApp.json'
import server from './i18n/ru/server.json'

type Paths<T> = T extends object
  ? {
      [K in keyof T]: K extends string ? (T[K] extends object ? `${K}.${Paths<T[K]>}` : `${K}`) : never
    }[keyof T]
  : never

type CommonKeys = `common.${Paths<typeof common>}`
type ServerKeys = `server.${Paths<typeof server>}`
type BotKeys = `bot.${Paths<typeof bot>}`
type MiniAppKeys = `miniApp.${Paths<typeof miniApp>}`
type Phrase = CommonKeys | ServerKeys | BotKeys | MiniAppKeys

declare global {
  type I18nPhrase = Phrase

  interface i18n extends CustomInstanceExtenstions {
    t(phrase: Phrase, replace?: Record<string, unknown>): string
  }
}
