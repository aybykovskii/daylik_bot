import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import {
	RoleType,
	UserBase,
	roleType,
	user,
	userFullDataResponseDto,
	userResponseDto,
} from 'shared'

import { Controller, Delete, Get, Patch, Post, Validate } from '@common'

import { RolesService } from '../roles'
import { SettingsService } from '../settings'
import { StatisticsService } from '../statistics'
import { SubscriptionsService } from '../subscriptions'

import { UsersService } from './users.service'

@Controller('/users', [
	UsersService,
	RolesService,
	SettingsService,
	StatisticsService,
	SubscriptionsService,
])
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly rolesService: RolesService,
		private readonly settingsService: SettingsService,
		private readonly statisticsService: StatisticsService,
		private readonly subscriptionsService: SubscriptionsService
	) {}

	@Get('/')
	@Validate({
		tags: ['Users'],
		response: {
			200: z.array(userResponseDto),
		},
	})
	async getUsers(_: FastifyRequest, reply: FastifyReply) {
		const users = await this.usersService.getAll()

		reply.status(200).send(users)
	}

	@Post('/')
	@Validate({
		tags: ['Users'],
		body: user,
		response: {
			201: userFullDataResponseDto,
		},
	})
	async createUser(req: FastifyRequest<{ Body: UserBase }>, reply: FastifyReply) {
		const userDto = await this.usersService.create(req.body)

		await this.settingsService.create({ userId: userDto.id })
		await this.statisticsService.create({ userId: userDto.id })
		await this.subscriptionsService.create({ userId: userDto.id })

		const user = await this.usersService.get(userDto.id)
		console.log({ user })
		return reply.status(201).send(user)
	}

	@Get('/:id')
	@Validate({
		tags: ['Users'],
		params: z.object({
			id: z.string().or(z.number()),
		}),
		response: {
			200: userFullDataResponseDto,
		},
	})
	async getUser(req: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
		const user = await this.usersService.get(req.params.id)

		return reply.status(200).send(user)
	}

	@Patch('/:id')
	@Validate({
		tags: ['Users'],
		params: z.object({
			id: z.coerce.number(),
		}),
		body: user,
		response: {
			200: userFullDataResponseDto,
		},
	})
	async updateUser(
		req: FastifyRequest<{ Body: UserBase; Params: { id: number } }>,
		reply: FastifyReply
	) {
		const user = await this.usersService.update(req.params.id, req.body)

		return reply.status(200).send(user)
	}

	@Post('/:id/roles')
	@Validate({
		tags: ['Users'],
		params: z.object({
			id: z.coerce.number(),
		}),
		body: z.object({
			roleType,
		}),
		response: {
			201: userFullDataResponseDto,
		},
	})
	async addRole(
		req: FastifyRequest<{ Body: { roleType: RoleType }; Params: { id: number } }>,
		reply: FastifyReply
	) {
		const role = await this.rolesService.get(req.body.roleType, true)
		const user = await this.usersService.getOneInternal(req.params.id, true)

		user.addRole(role)

		const fullData = await user.asFullData()

		return reply.status(201).send(fullData)
	}

	@Delete('/:id')
	@Validate({
		tags: ['Users'],
		params: z.object({
			id: z.coerce.number(),
		}),
		response: {
			204: z.undefined().openapi({
				type: 'null',
			}),
		},
	})
	async deleteUser(req: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
		await this.usersService.delete(req.params.id)

		return reply.status(204).send()
	}
}
