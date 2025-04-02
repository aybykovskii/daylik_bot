import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { emptyBody, paramsUuid } from '@/types/db'
import { eventSharingDto } from '@/types/event-shares'

import { eventSharesService } from './event-shares.service'
import { createEventSharingDto, eventSharingFullData, updateEventSharingDto } from './event-shares.types'

export const eventSharesRouter = new Hono()

eventSharesRouter.get(
  '/',
  createRouteDescription('Get all event shares', 'event-shares', {
    200: eventSharingDto.array(),
  }),
  async (c) => {
    const entities = await eventSharesService.readAll()

    return c.json(entities.value)
  }
)

eventSharesRouter.post(
  '/',
  createRouteDescription('Create an event share', 'event-shares', {
    201: eventSharingFullData,
  }),
  validate(createEventSharingDto),
  async (c) => {
    const createdEntity = await eventSharesService.create(c.req.valid('json'))

    if (createdEntity.isErr()) {
      return c.json({ error: createdEntity.error }, 400)
    }

    return c.json(createdEntity.value)
  }
)

eventSharesRouter.get(
  '/:id',
  createRouteDescription('Get an event share by id', 'event-shares', {
    200: eventSharingFullData,
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const entity = await eventSharesService.read(uuid)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return c.json(entity.value)
  }
)

eventSharesRouter.patch(
  '/:id',
  createRouteDescription('Update an event share by id', 'event-shares', {
    200: eventSharingFullData,
  }),
  validate(paramsUuid.in, 'param'),
  validate(updateEventSharingDto),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const entity = await eventSharesService.update(uuid, c.req.valid('json'))

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return c.json(entity.value)
  }
)

eventSharesRouter.delete(
  '/:id',
  createRouteDescription('Delete an event share by id', 'event-shares', {
    204: emptyBody,
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const entity = await eventSharesService.delete(uuid)

    if (entity.isErr()) {
      return c.json({ error: entity.error }, 400)
    }

    return c.status(204)
  }
)
