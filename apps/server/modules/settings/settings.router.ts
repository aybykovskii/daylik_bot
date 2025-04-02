import { type } from 'arktype'
import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { paramsId } from '@/types/db'
import { settingsDto } from '@/types/settings'

import { settingsService } from './settings.service'
import { settingsError, updateSettingsDto } from './settings.types'

const errorSchema = type({
  error: settingsError,
})

export const settingsRouter = new Hono()

settingsRouter.get(
  '/',
  createRouteDescription('Get list of all settings', 'settings', {
    200: settingsDto.array(),
    400: errorSchema,
  }),
  async (c) => {
    const entity = await settingsService.readAll()

    return c.json(entity.value)
  }
)

settingsRouter.get(
  '/:id',
  createRouteDescription('Get a setting by id', 'settings', {
    200: settingsDto,
    400: errorSchema,
  }),
  validate(paramsId.in, 'param'),
  validate(paramsId.in, 'query'),
  async (c) => {
    const { id } = c.req.valid('param')

    const entity = await settingsService.read(id)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return c.json(entity.value)
  }
)

settingsRouter.patch(
  '/:id',
  createRouteDescription('Update a setting by id', 'settings', {
    200: settingsDto,
    400: errorSchema,
  }),
  validate(paramsId.in, 'param'),
  validate(updateSettingsDto),
  async (c) => {
    const { id } = c.req.valid('param')
    const body = c.req.valid('json')

    const entity = await settingsService.update(id, body)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return c.json(entity.value)
  }
)
