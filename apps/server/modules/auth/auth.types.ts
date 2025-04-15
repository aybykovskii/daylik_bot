import { type } from 'arktype'

import { userRole } from '@/types/users'

export const authError = type('"ERR_AUTH_INVALID_TOKEN"')
export type AuthError = typeof authError.infer

// JSON Schema не поддерживает union типы, поэтому создаем Partial схему и преобразуем её тип в union
export const createTokenParams = type({
  'userId?': 'string.integer.parse',
  'telegramUserId?': 'string',
}).as<{ userId: number } | { telegramUserId: string }>()
export type CreateTokenParams = typeof createTokenParams.infer

export const createTokenResponse = type({ token: 'string' })
export type CreateTokenResponse = typeof createTokenResponse.infer

export const tokenData = type({
  userId: 'number',
  telegramUserId: 'string',
  role: userRole,
})
export type TokenData = typeof tokenData.infer
