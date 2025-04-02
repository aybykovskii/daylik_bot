import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { emptyBody, paramsId } from '@/types/db'
import { eventDto } from '@/types/events'

import { eventsService } from './events.service'
import { createEventDto, eventFullData, updateEventDto } from './events.types'

export const eventsRouter = new Hono()

eventsRouter.get(
  '/',
  createRouteDescription('Get list of all events', 'events', { 200: eventDto.array() }),
  async (c) => {
    const events = await eventsService.readAll()

    return c.json(events.value)
  }
)

eventsRouter.post(
  '/',
  createRouteDescription('Create an event', 'events', { 201: eventFullData }),
  validate(createEventDto),
  async (c) => {
    const event = await eventsService.create(c.req.valid('json'))

    if (event.isErr()) {
      return c.json(event.error, 400)
    }

    return c.json(event.value)
  }
)

eventsRouter.get(
  '/:id',
  createRouteDescription('Get an event', 'events', { 200: eventFullData }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const event = await eventsService.read(id)

    if (event.isErr()) {
      return c.json(event.error, 400)
    }

    return c.json(event.value)
  }
)

eventsRouter.patch(
  '/:id',
  createRouteDescription('Update an event', 'events', { 200: eventFullData }),
  validate(paramsId.in, 'param'),
  validate(updateEventDto),
  async (c) => {
    const { id } = c.req.valid('param')
    const event = await eventsService.update(id, c.req.valid('json'))

    if (event.isErr()) {
      return c.json(event.error, 400)
    }

    return c.json(event.value)
  }
)

eventsRouter.delete(
  '/:id',
  createRouteDescription('Delete an event', 'events', { 204: emptyBody }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    await eventsService.delete(id)

    return c.status(204)
  }
)
