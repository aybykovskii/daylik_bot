import { type } from 'arktype'
import { Hono } from 'hono'
import { eventDraftDto } from 'types/event-drafts'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { paramsId } from '@/types/db'

import { eventDraftsService } from './event-drafts.service'
import { createEventDraftDto, eventDraftFullData, updateEventDraftDto } from './event-drafts.types'

export const eventDraftsRouter = new Hono()

eventDraftsRouter.get(
  '/',
  createRouteDescription('Get all event drafts', 'event-drafts', { 200: eventDraftDto.array() }),
  async (c) => {
    const drafts = await eventDraftsService.readAll()

    return c.json(drafts.value)
  }
)

eventDraftsRouter.post(
  '/',
  createRouteDescription('Create an event draft', 'event-drafts', { 201: eventDraftFullData }),
  validate(createEventDraftDto),
  async (c) => {
    const createdDraft = await eventDraftsService.create(c.req.valid('json'))

    if (createdDraft.isErr()) {
      return c.json(createdDraft.error, 400)
    }

    return c.json(createdDraft.value)
  }
)

eventDraftsRouter.get(
  '/:id',
  createRouteDescription('Get an event draft', 'event-drafts', { 200: eventDraftFullData }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const draft = await eventDraftsService.read(id)

    if (draft.isErr()) {
      return c.json(draft.error, 400)
    }

    return c.json(draft.value)
  }
)

eventDraftsRouter.patch(
  '/:id',
  createRouteDescription('Update an event draft', 'event-drafts', { 200: eventDraftFullData }),
  validate(paramsId.in, 'param'),
  validate(updateEventDraftDto),
  async (c) => {
    const { id } = c.req.valid('param')

    const updatedDraft = await eventDraftsService.update(id, c.req.valid('json'))

    if (updatedDraft.isErr()) {
      return c.json(updatedDraft.error, 400)
    }

    return c.json(updatedDraft.value)
  }
)

eventDraftsRouter.delete(
  '/:id',
  createRouteDescription('Delete an event draft', 'event-drafts', { 204: type('null') }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')

    const result = await eventDraftsService.delete(id)

    if (result.isErr()) {
      return c.json(result.error, 400)
    }

    return c.status(204)
  }
)
