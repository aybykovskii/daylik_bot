import { type } from 'arktype'
import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { makeErrorBody } from '@/types/common'

import { usersService } from '../users'
import { UsersError } from '../users/users.types'

import { authService } from './auth.service'
import { createTokenParams, createTokenResponse } from './auth.types'

export const authRouter = new Hono()

authRouter.get(
  '/token',
  createRouteDescription('Create a token for a user', 'auth', {
    201: createTokenResponse,
    400: makeErrorBody(UsersError.DoesNotExist),
  }),
  validate(createTokenParams.in, 'query'),
  async (c) => {
    const param = c.req.valid('query')
    const validatedParam = createTokenParams(param)

    if (validatedParam instanceof type.errors) {
      return c.json({ error: 'ERR_VALIDATION_FAILED' }, 400)
    }

    const userResult = await usersService.read('userId' in param ? param.userId : param.telegramUserId)

    if (userResult.isErr()) {
      return c.json({ error: userResult.error }, 404)
    }

    const { id, role, telegramUserId } = userResult.value

    const token = await authService.createToken({ userId: id, role, telegramUserId })

    c.header('Authorization', `Bearer ${token.value}`)
    return c.json({ token: token.value }, 201)
  }
)
