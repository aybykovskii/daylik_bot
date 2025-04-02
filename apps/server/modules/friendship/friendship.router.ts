import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { emptyBody, paramsUuid } from '@/types/db'
import { friendshipRequestDto } from '@/types/friendship-requests'

import { friendshipService } from './friendship.service'
import {
  createFriendshipRequestDto,
  friendshipRequestFullData,
  readAllFriendshipRequestsQuery,
  updateFriendshipRequestDto,
} from './friendship.types'

export const friendshipRouter = new Hono()

friendshipRouter.get(
  '/',
  createRouteDescription('Get all friendship requests', 'friendships', {
    200: friendshipRequestDto.array(),
  }),
  validate(readAllFriendshipRequestsQuery.in, 'query'),
  async (c) => {
    const { userId } = c.req.valid('query')
    const friendshipRequests = await friendshipService.readAll({ userId })

    return c.json(friendshipRequests)
  }
)

friendshipRouter.post(
  '/',
  createRouteDescription('Create a friendship request', 'friendships', {
    201: friendshipRequestFullData,
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
  createRouteDescription('Get a friendship request', 'friendships', {
    200: friendshipRequestFullData,
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
  createRouteDescription('Update a friendship request', 'friendships', {
    200: friendshipRequestFullData,
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
  createRouteDescription('Delete a friendship request', 'friendships', {
    204: emptyBody,
  }),
  validate(paramsUuid.in, 'param'),
  async (c) => {
    const { uuid } = c.req.valid('param')
    const friendshipRequest = await friendshipService.delete(uuid)

    if (friendshipRequest.isErr()) {
      return c.json(friendshipRequest.error, 400)
    }

    return c.status(204)
  }
)
