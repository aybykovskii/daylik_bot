import jwt from 'jsonwebtoken'
import { Ok, Result, err, ok } from 'neverthrow'
import { env } from 'shared'

import { AuthError } from './auth.types'

class AuthService {
  createToken(userId: number): Ok<string, never> {
    return ok(jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: '1h' }))
  }

  verifyToken(token: string): Result<{ userId: number }, AuthError> {
    try {
      return ok(jwt.verify(token, env.JWT_SECRET) as { userId: number })
    } catch {
      return err('ERR_AUTH_INVALID_TOKEN')
    }
  }
}

export const authService = new AuthService()
