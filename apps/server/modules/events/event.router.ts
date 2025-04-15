import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validateResponseUserId, validateRole } from '@/common/validation'
import { emptySuccessBody, makeErrorBody, paramsId, successBody } from '@/types/common'
import { eventDto } from '@/types/events'

import { EventDraftsError } from '../event-drafts/event-drafts.types'

import { eventsService } from './events.service'
import { EventsError, createEventDto, eventFullData, updateEventDto } from './events.types'

export const eventsRouter = new Hono()

eventsRouter.get(
  '/',
  createRouteDescription('Get list of all events', 'events', {
    200: eventDto.array(),
    403: makeErrorBody(CommonError.InvalidUserRole),
  }),
  validateRole('staff'),
  async (c) => {
    const events = await eventsService.readAll()

    return c.json(events.value)
  }
)

eventsRouter.post(
  '/',
  createRouteDescription('Create an event', 'events', {
    201: eventFullData,
    400: makeErrorBody(EventsError.InvalidData.or(EventDraftsError.DoesNotExist)),
    403: makeErrorBody(CommonError.ValidationFailed),
  }),
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
  createRouteDescription('Get an event', 'events', {
    200: eventFullData,
    400: makeErrorBody(EventsError.DoesNotExist),
    403: makeErrorBody(CommonError.InvalidUserId),
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const event = await eventsService.read(id)

    if (event.isErr()) {
      return c.json(event.error, 400)
    }

    return validateResponseUserId(c, event.value)
  }
)

eventsRouter.patch(
  '/:id',
  createRouteDescription('Update an event', 'events', {
    200: eventFullData,
    400: makeErrorBody(CommonError.ValidationFailed.or(EventsError.DoesNotExist)),
    403: makeErrorBody(CommonError.InvalidUserId),
  }),
  validate(paramsId.in, 'param'),
  validate(updateEventDto),
  async (c) => {
    const { id } = c.req.valid('param')
    const body = c.req.valid('json')
    const event = await eventsService.update(id, body)

    if (event.isErr()) {
      return c.json(event.error, 400)
    }

    return validateResponseUserId(c, event.value)
  }
)

eventsRouter.delete(
  '/:id',
  createRouteDescription('Delete an event', 'events', {
    200: successBody,
    400: makeErrorBody(CommonError.ValidationFailed.or(EventsError.DoesNotExist)),
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    await eventsService.delete(id)

    return c.json(emptySuccessBody)
  }
)
