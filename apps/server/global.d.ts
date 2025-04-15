import 'shared/global'

import { Role } from './types/users'

declare module 'hono' {
  interface ContextVariableMap {
    userId: number
    telegramUserId: string
    role: Role
    t: (phrase: I18nPhrase, replace?: Record<string, unknown>) => string
  }
}
