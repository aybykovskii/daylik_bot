import { Hono } from 'hono'

import { createRouteDescription } from '@/common/route'
import { CommonError, validate, validatePathUserId, validateResponseUserId, validateRole } from '@/common/validation'
import { emptySuccessBody, makeErrorBody, paramsId, successBody } from '@/types/common'
import { getIsUserRoleValid, userDto } from '@/types/users'

import { statisticsService } from '../statistics'

import { usersService } from './users.service'
import { UsersError, createUserDto, updateUserDto, userFullData } from './users.types'

export const usersRouter = new Hono()

usersRouter.get(
  '/',
  createRouteDescription('Get list of users', 'users', {
    200: userDto.array(),
    403: makeErrorBody(CommonError.InvalidUserRole),
  }),
  validateRole('staff'),
  async (c) => {
    const users = await usersService.readAll()

    return c.json(users)
  }
)

usersRouter.post(
  '/',
  createRouteDescription('Create user', 'users', {
    201: userFullData,
    400: makeErrorBody(CommonError.ValidationFailed.or(UsersError.AlreadyExists)),
  }),
  validate(createUserDto),
  async (c) => {
    const result = await usersService.create(c.req.valid('json'))

    if (result.isErr()) {
      return c.json({ error: result.error }, 400)
    }

    return c.json(result.value)
  }
)

usersRouter.get(
  '/:id',
  createRouteDescription('Get user by id', 'users', {
    200: userFullData,
    400: makeErrorBody(CommonError.ValidationFailed.or(UsersError.DoesNotExist)),
    403: makeErrorBody(CommonError.InvalidUserId),
  }),
  validate(paramsId.in, 'param'),
  validatePathUserId('id'),
  async (c) => {
    const { id } = c.req.valid('param')
    const user = await usersService.read(id)

    if (user.isErr()) {
      return c.json({ error: user.error }, 400)
    }

    return validateResponseUserId(c, user.value, ['id', 'telegramUserId'])
  }
)

usersRouter.patch(
  '/:id',
  createRouteDescription('Update user', 'users', {
    200: userFullData,
    400: makeErrorBody(CommonError.ValidationFailed.or(UsersError.DoesNotExist).or(UsersError.UpdateFailed)),
    403: makeErrorBody(CommonError.InvalidUserId),
  }),
  validate(paramsId.in, 'param'),
  validatePathUserId('id'),
  validate(updateUserDto),
  async (c) => {
    const { id } = c.req.valid('param')
    let body = c.req.valid('json')

    // If user is not admin, don't allow them to update role
    if (body.role && !getIsUserRoleValid(c.var.role, 'admin')) {
      const { role, ...rest } = body
      body = { ...rest }
    }

    const result = await usersService.update(id, body)

    if (result.isErr()) {
      return c.json({ error: result.error }, 400)
    }

    return c.json(result.value)
  }
)

usersRouter.delete(
  '/:id',
  createRouteDescription('Delete user', 'users', {
    200: successBody,
    400: makeErrorBody(CommonError.ValidationFailed.or(UsersError.DoesNotExist)),
    403: makeErrorBody(CommonError.InvalidUserId),
  }),
  validatePathUserId('id'),
  validate(paramsId.in, 'param'),
  async (c) => {
    const { id } = c.req.valid('param')
    const result = await usersService.delete(id)

    if (result.isErr()) {
      return c.json({ error: result.error }, 400)
    }

    return c.json(emptySuccessBody)
  }
)

usersRouter.patch(
  '/:id/increase_requests_count',
  createRouteDescription('Increase requests count for user', 'users', {
    200: successBody,
    400: makeErrorBody(CommonError.ValidationFailed.or(UsersError.DoesNotExist)),
    403: makeErrorBody(CommonError.InvalidUserId),
  }),
  validate(paramsId.in, 'param'),
  validatePathUserId('id'),
  async (c) => {
    const { id } = c.req.valid('param')
    const user = await usersService.read(id)

    if (user.isErr()) {
      return c.json({ error: user.error }, 400)
    }

    statisticsService.incrementSentRequestsCount(user.value.statistics.id)

    return c.json(emptySuccessBody)
  }
)
