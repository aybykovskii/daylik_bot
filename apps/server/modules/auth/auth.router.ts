import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'

import { usersService } from '../users'

import { authService } from './auth.service'
import { createTokenParams, createTokenResponse } from './auth.types'

export const authRouter = new Hono()

authRouter.get(
  '/login',
  createRouteDescription('Create a token for a user', 'auth', { 201: createTokenResponse }),
  validate(createTokenParams.in, 'query'),
  async (c) => {
    const param = c.req.valid('query')
    let userId = 'userId' in param ? param.userId : undefined

    if ('telegramUserId' in param) {
      const userResult = await usersService.read(param.telegramUserId)

      if (userResult.isErr()) {
        return c.json({ error: userResult.error }, 400)
      }

      const user = userResult.value

      userId = user.id
    }

    if (!userId) {
      return c.json({ error: 'ERR_USER_NOT_FOUND' }, 400)
    }

    const token = await authService.createToken(userId)

    c.header('Authorization', `Bearer ${token.value}`)
    return c.json({ token: token.value }, 201)
  }
)
