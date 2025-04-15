import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validateRole } from '@/common/validation'
import { emptySuccessBody, makeErrorBody, paramsUuid, successBody } from '@/types/common'
import { friendshipRequestDto } from '@/types/friendship-requests'

import { friendshipService } from './friendship.service'
import {
  FriendshipError,
  createFriendshipRequestDto,
  friendshipRequestFullData,
  readAllFriendshipRequestsQuery,
  updateFriendshipRequestDto,
} from './friendship.types'

export const friendshipRouter = new Hono()

friendshipRouter.get(
  '/',
  createRouteDescription('Get all friendship requests', 'friendship', {
    200: friendshipRequestDto.array(),
    400: makeErrorBody(CommonError.ValidationFailed),
    403: makeErrorBody(CommonError.InvalidUserRole),
  }),
  validate(readAllFriendshipRequestsQuery.in, 'query'),
  validateRole('staff'),
  async (c) => {
    const { userId } = c.req.valid('query')
    const friendshipRequests = await friendshipService.readAll({ userId })

    return c.json(friendshipRequests)
  }
)

friendshipRouter.post(
  '/',
  createRouteDescription('Create a friendship request', 'friendship', {
    201: friendshipRequestFullData,
    400: makeErrorBody(CommonError.ValidationFailed.or(FriendshipError.AlreadyExists)),
  }),
  validate(createFriendshipRequestDto),
  async (c) => {
    const body = c.req.valid('json')
    const friendshipRequest = await friendshipService.create(body)

    if (friendshipRequest.isErr()) {
      return c.json(friendshipRequest.error, 400)
    }

    return c.json(friendshipRequest.value)
  }
)

friendshipRouter.get(
  '/:uuid',
  createRouteDescription('Get a friendship request', 'friendship', {
    200: friendshipRequestFullData,
    400: makeErrorBody(CommonError.ValidationFailed.or(FriendshipError.DoesNotExist)),
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const friendshipRequest = await friendshipService.read(uuid)

    if (friendshipRequest.isErr()) {
      return c.json(friendshipRequest.error, 400)
    }

    return c.json(friendshipRequest.value)
  }
)

friendshipRouter.patch(
  '/:uuid',
  createRouteDescription('Update a friendship request', 'friendship', {
    200: friendshipRequestFullData,
    400: makeErrorBody(
      CommonError.ValidationFailed.or(FriendshipError.DoesNotExist)
        .or(FriendshipError.NotPending)
        .or(FriendshipError.UserDoesNotExist)
    ),
  }),
  validate(paramsUuid.in, 'param'),
  validate(updateFriendshipRequestDto),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const body = c.req.valid('json')
    const friendshipRequest = await friendshipService.update(uuid, body)

    if (friendshipRequest.isErr()) {
      return c.json(friendshipRequest.error, 400)
    }

    return c.json(friendshipRequest.value)
  }
)

friendshipRouter.delete(
  '/:uuid',
  createRouteDescription('Delete a friendship request', 'friendship', {
    200: successBody,
    400: makeErrorBody(CommonError.ValidationFailed.or(FriendshipError.DoesNotExist)),
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const friendshipRequest = await friendshipService.delete(uuid)

    if (friendshipRequest.isErr()) {
      return c.json(friendshipRequest.error, 400)
    }

    return c.json(emptySuccessBody)
  }
)
