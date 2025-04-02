import { MiddlewareHandler } from 'hono'
import { env } from 'shared'

import { authService } from './auth.service'

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  if (c.req.header(env.AUTH_HEADER_KEY) === env.AUTH_HEADER_VALUE) {
    return next()
  }

  const token = c.req.header('Authorization')?.split(' ')[1]

  if (!token) {
    return c.json({ error: 'ERR_UNAUTHORIZED' }, 401)
  }

  const result = authService.verifyToken(token)

  if (result.isErr()) {
    return c.json({ error: 'ERR_UNAUTHORIZED' }, 401)
  }

  c.set('userId', result.value.userId)
  await next()
}
