import { Type } from 'arktype'
import { ValidationTargets } from 'hono'
import { validator } from 'hono-openapi/arktype'

export const typeToArray = <T extends Type>(type: T) =>
  type.select('unit').map((s) => s.unit) as T extends Type<infer U> ? U[] : never

export const validate = <T extends Type, VT extends keyof ValidationTargets = 'json'>(type: T, target?: VT) =>
  validator(target ?? 'json', type, (result, c) => {
    if (result.success) {
      return c.json(result.data as never)
    }

    return c.json(
      {
        error: 'ERR_VALIDATION_FAILED',
        details: result.errors.map(({ path, message }) => ({ path, message })),
      },
      400
    )
  })
