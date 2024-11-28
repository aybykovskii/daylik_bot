import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { RoleBase, RoleType, role, roleType } from 'shared'

import { Controller, Get, Post, Validate } from '@common'

import { RolesService } from './roles.service'

@Controller('/roles', [RolesService])
export class RolesController {
	constructor(private rolesService: RolesService) {}

	@Get('/')
	@Validate({
		response: {
			200: z.array(role),
		},
	})
	async getRoles(_: FastifyRequest, reply: FastifyReply) {
		const roles = await this.rolesService.getAll()

		reply.status(200).send(roles)
	}

	@Post('/')
	@Validate({
		body: role,
		response: {
			201: role,
		},
	})
	async createRole(req: FastifyRequest<{ Body: RoleBase }>, reply: FastifyReply) {
		const role = await this.rolesService.create(req.body)

		reply.status(201).send(role)
	}

	@Get('/:type')
	@Validate({
		params: z.object({
			type: roleType,
		}),
		response: {
			200: role,
		},
	})
	async getRole(req: FastifyRequest<{ Params: { type: RoleType } }>, reply: FastifyReply) {
		const role = await this.rolesService.get(req.params.type)

		reply.status(200).send(role)
	}
}
