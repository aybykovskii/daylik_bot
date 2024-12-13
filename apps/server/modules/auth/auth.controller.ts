import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { Controller, Post, Validate } from 'common'
import { UsersService } from 'modules/users'

import { AuthService } from './auth.service'

@Controller('/auth', [UsersService, AuthService])
export class AuthController {
	constructor(
		private readonly usersService: UsersService,
		private readonly authService: AuthService
	) {}

	@Post('/login')
	@Validate({
		body: z.object({
			telegramUserId: z.string(),
		}),
		response: {
			201: z.object({
				token: z.string(),
			}),
		},
	})
	async login(req: FastifyRequest<{ Body: { telegramUserId: string } }>, reply: FastifyReply) {
		const user = await this.usersService.get(req.body.telegramUserId)
		const token = await this.authService.login(user.id)

		return reply.header('Authorization', `Bearer ${token}`).status(201).send({ token })
	}
}
