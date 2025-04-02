import dayjs from 'dayjs'
import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { validate } from '@/common/validation'
import { emptyBody, paramsId } from '@/types/db'
import { userDto } from '@/types/users'

import { settingsService } from '../settings'
import { statisticsService } from '../statistics'
import { subscriptionsService } from '../subscriptions'

import { usersService } from './users.service'
import { createUserDto, updateUserDto, userFullData } from './users.types'

export const usersRouter = new Hono()

usersRouter.get(
  '/',
  createRouteDescription('Get list of users', 'users', {
    200: userDto.array(),
  }),
  async (c) => {
    const users = await usersService.getAll()

    return c.json(users)
  }
)

usersRouter.post(
  '/',
  createRouteDescription('Create user', 'users', {
    201: userFullData,
  }),
  validate(createUserDto),
  async (c) => {
    const result = await usersService.create(c.req.valid('json'))

    if (result.isErr()) {
      return c.json({ error: result.error }, 400)
    }

    const user = result.value

    await settingsService.create({ userId: user.id })
    await statisticsService.create({ userId: user.id })
    await subscriptionsService.create({
      userId: user.id,
      startDate: dayjs().toISOString(),
      endDate: dayjs().add(7, 'days').toISOString(),
    })

    const updatedUser = await usersService.read(user.id)

    if (updatedUser.isErr()) {
      return c.json({ error: updatedUser.error }, 400)
    }

    return c.json(updatedUser.value)
  }
)

usersRouter.get(
  '/:id',
  createRouteDescription('Get user by id', 'users', {
    200: userFullData,
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const user = await usersService.read(id)

    if (user.isErr()) {
      return c.json({ error: user.error }, 400)
    }

    return c.json(user.value)
  }
)

// TODO: Add validation for updating role
usersRouter.patch(
  '/:id',
  createRouteDescription('Update user', 'users', {
    200: userFullData,
  }),
  validate(paramsId.in, 'param'),
  validate(updateUserDto),
  async (c) => {
    const { id } = c.req.valid('param')
    const result = await usersService.update(id, c.req.valid('json'))

    if (result.isErr()) {
      return c.json({ error: result.error }, 400)
    }

    return c.json(result.value)
  }
)

usersRouter.delete(
  '/:id',
  createRouteDescription('Delete user', 'users', {
    204: emptyBody,
  }),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const result = await usersService.delete(id)

    if (result.isErr()) {
      return c.json({ error: result.error }, 400)
    }

    return c.status(204)
  }
)
