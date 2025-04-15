import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validateResponseUserId, validateRole } from '@/common/validation'
import { emptySuccessBody, makeErrorBody, paramsUuid, successBody } from '@/types/common'
import { eventSharingDto } from '@/types/event-shares'

import { eventSharesService } from './event-shares.service'
import {
  EventSharesError,
  createEventSharingDto,
  eventSharingFullData,
  updateEventSharingDto,
} from './event-shares.types'

export const eventSharesRouter = new Hono()

eventSharesRouter.get(
  '/',
  createRouteDescription('Get all event shares', 'event_shares', {
    200: eventSharingDto.array(),
    403: makeErrorBody(CommonError.InvalidUserRole),
  }),
  validateRole('staff'),
  async (c) => {
    const entities = await eventSharesService.readAll()

    return c.json(entities.value)
  }
)

eventSharesRouter.post(
  '/',
  createRouteDescription('Create an event share', 'event_shares', {
    201: eventSharingFullData,
    400: makeErrorBody(EventSharesError.InvalidData),
    403: makeErrorBody(CommonError.InvalidUserId.or(CommonError.ValidationFailed)),
  }),
  validate(createEventSharingDto),
  async (c) => {
    const createdEntity = await eventSharesService.create(c.req.valid('json'))

    if (createdEntity.isErr()) {
      return c.json({ error: createdEntity.error }, 400)
    }

    return validateResponseUserId(c, createdEntity.value)
  }
)

eventSharesRouter.get(
  '/:uuid',
  createRouteDescription('Get an event share by id', 'event_shares', {
    200: eventSharingFullData,
    400: makeErrorBody(EventSharesError.DoesNotExist),
    403: makeErrorBody(CommonError.InvalidUserId),
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const entity = await eventSharesService.read(uuid)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return validateResponseUserId(c, entity.value)
  }
)

eventSharesRouter.patch(
  '/:uuid',
  createRouteDescription('Update an event share by id', 'event_shares', {
    200: eventSharingFullData,
    400: makeErrorBody(EventSharesError.DoesNotExist.or(EventSharesError.InvalidData)),
    403: makeErrorBody(CommonError.InvalidUserId.or(CommonError.ValidationFailed)),
  }),
  validate(paramsUuid.in, 'param'),
  validate(updateEventSharingDto),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const body = c.req.valid('json')
    const entity = await eventSharesService.update(uuid, body)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return validateResponseUserId(c, entity.value)
  }
)

eventSharesRouter.delete(
  '/:uuid',
  createRouteDescription('Delete an event share by id', 'event_shares', {
    200: successBody,
    400: makeErrorBody(EventSharesError.DoesNotExist),
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const entity = await eventSharesService.delete(uuid)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return c.json(emptySuccessBody)
  }
)
