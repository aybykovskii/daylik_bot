import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import {
	CreateFriendshipRequestDto,
	FriendshipRequestFullDataResponseDto,
	FriendshipRequestsResponseDto,
	ParamsId,
	ParamsUuid,
	UpdateFriendshipRequestDto,
	createFriendshipRequestDto,
	friendshipRequestFullDataResponseDto,
	friendshipRequestsFullDataResponseDto,
	paramsId,
	paramsUuid,
	updateFriendshipRequestDto,
} from 'shared'

import { Controller, Delete, Get, Patch, Post, Validate } from '@common'

import { FriendshipService } from './friendship.service'

@Controller('/friendships', [FriendshipService])
export class FriendshipController {
	constructor(private readonly friendshipService: FriendshipService) {}

	@Get('/users/:id')
	@Validate({
		params: paramsId,
		response: {
			200: friendshipRequestsFullDataResponseDto,
		},
	})
	async getUserFriendships(
		{ params }: FastifyRequest<{ Params: ParamsId }>,
		reply: FastifyReply<{ Body: FriendshipRequestsResponseDto }>
	) {
		const friendshipRequests = await this.friendshipService.findAllByUserId(params.id)
		console.dir(friendshipRequests, {
			depth: 5,
			colors: true,
		})
		reply.status(200).send(friendshipRequests)
	}

	@Post('/')
	@Validate({
		body: createFriendshipRequestDto,
		response: {
			201: friendshipRequestFullDataResponseDto,
		},
	})
	async create(
		{ body }: FastifyRequest<{ Body: CreateFriendshipRequestDto }>,
		reply: FastifyReply<{ Body: FriendshipRequestFullDataResponseDto }>
	) {
		const friendshipRequest = await this.friendshipService.create(body)

		reply.status(201).send(friendshipRequest)
	}

	@Get('/:uuid')
	@Validate({
		params: paramsUuid,
		response: {
			200: friendshipRequestFullDataResponseDto,
		},
	})
	async findOne(
		{ params }: FastifyRequest<{ Params: ParamsUuid }>,
		reply: FastifyReply<{ Body: FriendshipRequestFullDataResponseDto }>
	) {
		const friendshipRequest = await this.friendshipService.findOne(params.uuid)
		console.dir(friendshipRequest, {
			depth: 5,
			colors: true,
		})
		reply.status(200).send(friendshipRequest)
	}

	@Patch('/:uuid')
	@Validate({
		params: paramsUuid,
		body: updateFriendshipRequestDto,
		response: {
			200: friendshipRequestFullDataResponseDto,
		},
	})
	async update(
		{ params, body }: FastifyRequest<{ Params: ParamsUuid; Body: UpdateFriendshipRequestDto }>,
		reply: FastifyReply<{ Body: FriendshipRequestFullDataResponseDto }>
	) {
		const friendshipRequest = await this.friendshipService.update(params.uuid, body)

		reply.status(200).send(friendshipRequest)
	}

	@Delete('/:uuid')
	@Validate({
		params: paramsUuid,
		response: {
			204: z.undefined().openapi({
				type: 'null',
			}),
		},
	})
	async delete({ params }: FastifyRequest<{ Params: ParamsUuid }>, reply: FastifyReply) {
		await this.friendshipService.delete(params.uuid)

		reply.status(204).send()
	}
}
