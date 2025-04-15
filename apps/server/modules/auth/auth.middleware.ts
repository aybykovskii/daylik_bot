import { MiddlewareHandler } from 'hono'

import { env } from 'shared'

import { authService } from './auth.service'

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  if (c.req.header(env.AUTH_HEADER_KEY) === env.AUTH_HEADER_VALUE) {
    c.set('role', 'system')
    return next()
  }

  const token = c.req.header('Authorization')?.split(' ')[1]

  if (!token) {
    return c.json({ error: 'ERR_UNAUTHORIZED', message: 'No token provided' }, 401)
  }

  const result = authService.verifyToken(token)

  if (result.isErr()) {
    return c.json({ error: 'ERR_UNAUTHORIZED', message: 'Invalid token' }, 401)
  }

  c.set('userId', result.value.userId)
  c.set('telegramUserId', result.value.telegramUserId)
  c.set('role', result.value.role)

  await next()
}
