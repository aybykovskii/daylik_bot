import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validateResponseUserId, validateRole } from '@/common/validation'
import { makeErrorBody, paramsId } from '@/types/common'
import { settingsDto } from '@/types/settings'

import { settingsService } from './settings.service'
import { SettingsError, updateSettingsDto } from './settings.types'

export const settingsRouter = new Hono()

settingsRouter.get(
  '/',
  createRouteDescription('Get list of all settings', 'settings', {
    200: settingsDto.array(),
    400: makeErrorBody(CommonError.ValidationFailed),
    403: makeErrorBody(CommonError.InvalidUserRole),
  }),
  validateRole('staff'),
  async (c) => {
    const entity = await settingsService.readAll()

    return c.json(entity.value)
  }
)

settingsRouter.get(
  '/:id',
  createRouteDescription('Get a setting by id', 'settings', {
    200: settingsDto,
    400: makeErrorBody(CommonError.ValidationFailed.or(SettingsError.DoesNotExist)),
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')

    const entity = await settingsService.read(id)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return validateResponseUserId(c, entity.value)
  }
)

settingsRouter.patch(
  '/:id',
  createRouteDescription('Update a setting by id', 'settings', {
    200: settingsDto,
    400: makeErrorBody(CommonError.ValidationFailed.or(SettingsError.DoesNotExist)),
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

    return validateResponseUserId(c, entity.value)
  }
)
