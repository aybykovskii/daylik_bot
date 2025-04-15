import { Type, type } from 'arktype'
import { Context, MiddlewareHandler, ValidationTargets } from 'hono'

import { validator } from 'hono-openapi/arktype'

import { UserRole, getIsUserRoleValid } from '@/types/users'

export const typeToArray = <T extends Type>(type: T) =>
  type.select('unit').map((s) => s.unit) as T extends Type<infer U> ? U[] : never

export const CommonError = {
  ValidationFailed: type('"ERR_VALIDATION_FAILED"'),
  InvalidUserId: type('"ERR_INVALID_USER_ID"'),
  InvalidUserRole: type('"ERR_INVALID_USER_ROLE"'),
}

export const validate = <T extends Type, VT extends keyof ValidationTargets = 'json'>(type: T, target?: VT) =>
  validator(target ?? 'json', type, (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: 'ERR_VALIDATION_FAILED',
          details: result.errors.map(({ path, message }) => ({ path, message })),
        },
        400
      )
    }
  })

export const validateRole =
  (role: UserRole): MiddlewareHandler =>
  async (c, next) => {
    if (c.var.role && !getIsUserRoleValid(c.var.role, role)) {
      return c.json({ error: 'ERR_INVALID_USER_ROLE', message: 'You are not authorized to access this resource' }, 403)
    }

    return next()
  }

export const validatePathUserId =
  (key = 'id'): MiddlewareHandler =>
  async (c, next) => {
    if (c.var.role === 'system') return next()

    if ([c.var.userId, c.var.telegramUserId].every((id) => id !== c.req.param(key))) {
      return c.json(
        { error: 'ERR_INVALID_USER_ID', message: 'You are not authorized to access this resource. Path is not valid.' },
        403
      )
    }

    return next()
  }

export const validateResponseUserId = <T extends Record<string, unknown>>(
  c: Context,
  body: T,
  idKeys: (keyof T)[] = ['userId']
) => {
  if (c.var.role === 'system') return c.json(body)

  if (idKeys.every((key) => ![c.var.telegramUserId, c.var.userId].includes(body[key] as string | number))) {
    return c.json(
      {
        error: 'ERR_INVALID_USER_ID',
        message: 'You are not authorized to access this resource. Response is not valid.',
      },
      403
    )
  }

  return c.json(body)
}
