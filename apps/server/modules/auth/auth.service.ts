import jwt from 'jsonwebtoken'
import { Ok, Result, err, ok } from 'neverthrow'

import { env } from 'shared'

import { AuthError, TokenData } from './auth.types'

class AuthService {
  createToken(arg: TokenData): Ok<string, never> {
    return ok(jwt.sign(arg, env.JWT_SECRET, { expiresIn: '1h' }))
  }

  verifyToken(token: string): Result<TokenData, AuthError> {
    try {
      return ok(jwt.verify(token, env.JWT_SECRET) as TokenData)
    } catch {
      return err('ERR_AUTH_INVALID_TOKEN')
    }
  }
}

export const authService = new AuthService()
