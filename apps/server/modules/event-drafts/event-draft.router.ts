import { Hono } from 'hono'
import { eventDraftDto } from 'types/event-drafts'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validateResponseUserId, validateRole } from '@/common/validation'
import { emptySuccessBody, makeErrorBody, paramsId, successBody } from '@/types/common'

import { eventDraftsService } from './event-drafts.service'
import { EventDraftsError, createEventDraftDto, eventDraftFullData, updateEventDraftDto } from './event-drafts.types'

export const eventDraftsRouter = new Hono()

eventDraftsRouter.get(
  '/',
  createRouteDescription('Get all event drafts', 'event_drafts', { 200: eventDraftDto.array() }),
  validateRole('staff'),
  async (c) => {
    const drafts = await eventDraftsService.readAll()

    return c.json(drafts.value)
  }
)

eventDraftsRouter.post(
  '/',
  createRouteDescription('Create an event draft', 'event_drafts', {
    201: eventDraftFullData,
    400: makeErrorBody(CommonError.ValidationFailed),
    404: makeErrorBody(EventDraftsError.DoesNotExist),
  }),
  validate(createEventDraftDto),
  async (c) => {
    const createdDraft = await eventDraftsService.create(c.req.valid('json'))

    return validateResponseUserId(c, createdDraft.value)
  }
)

eventDraftsRouter.get(
  '/:id',
  createRouteDescription('Get an event draft', 'event_drafts', {
    200: eventDraftFullData,
    400: makeErrorBody(CommonError.ValidationFailed.or(CommonError.InvalidUserId)),
    404: makeErrorBody(EventDraftsError.DoesNotExist),
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const draft = await eventDraftsService.read(id)

    if (draft.isErr()) {
      return c.json(draft.error, 400)
    }

    return validateResponseUserId(c, draft.value)
  }
)

eventDraftsRouter.patch(
  '/:id',
  createRouteDescription('Update an event draft', 'event_drafts', {
    200: eventDraftFullData,
    400: makeErrorBody(CommonError.ValidationFailed),
    404: makeErrorBody(EventDraftsError.DoesNotExist),
  }),
  validate(paramsId.in, 'param'),
  validate(updateEventDraftDto),
  async (c) => {
    const { id } = c.req.valid('param')

    const updatedDraft = await eventDraftsService.update(id, c.req.valid('json'))

    if (updatedDraft.isErr()) {
      return c.json(updatedDraft.error, 400)
    }

    return validateResponseUserId(c, updatedDraft.value)
  }
)

eventDraftsRouter.delete(
  '/:id',
  createRouteDescription('Delete an event draft', 'event_drafts', {
    200: successBody,
    400: makeErrorBody(CommonError.ValidationFailed),
    404: makeErrorBody(EventDraftsError.DoesNotExist),
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')

    const result = await eventDraftsService.delete(id)

    if (result.isErr()) {
      return c.json(result.error, 400)
    }

    return c.json(emptySuccessBody)
  }
)
