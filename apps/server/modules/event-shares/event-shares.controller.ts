import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import {
	CreateEventSharingDto,
	EventSharesResponseDto,
	EventSharingFullDataResponseDto,
	ParamsUuid,
	UpdateEventSharingDto,
	createEventSharingDto,
	eventSharesResponseDto,
	eventSharingFullDataResponseDto,
	paramsUuid,
	updateEventSharingDto,
} from 'shared'

import { Controller, Delete, Get, Patch, Post, Validate } from '@common'

import { EventSharesService } from './event-shares.service'

@Controller('/event_shares', [EventSharesService])
export class EventSharesController {
	constructor(private readonly eventSharesService: EventSharesService) {}

	@Get('/')
	@Validate({
		response: {
			200: eventSharesResponseDto,
		},
	})
	async getAll(_: FastifyRequest, reply: FastifyReply<{ Body: EventSharesResponseDto }>) {
		const entities = await this.eventSharesService.getAll()

		reply.status(200).send(entities)
	}

	@Post('/')
	@Validate({
		body: createEventSharingDto,
		response: {
			201: eventSharingFullDataResponseDto,
		},
	})
	async create(
		req: FastifyRequest<{ Body: CreateEventSharingDto }>,
		reply: FastifyReply<{ Body: EventSharingFullDataResponseDto }>
	) {
		const createdEntity = await this.eventSharesService.create(req.body)

		reply.status(201).send(createdEntity)
	}

	@Get('/:id')
	@Validate({
		params: paramsUuid,
		response: {
			200: eventSharingFullDataResponseDto,
		},
	})
	async get(
		req: FastifyRequest<{ Params: ParamsUuid }>,
		reply: FastifyReply<{ Body: EventSharingFullDataResponseDto }>
	) {
		const entity = await this.eventSharesService.get(req.params.uuid)

		reply.status(200).send(entity)
	}

	@Patch('/:id')
	@Validate({
		params: paramsUuid,
		body: updateEventSharingDto,
		response: {
			200: eventSharingFullDataResponseDto,
		},
	})
	async update(
		req: FastifyRequest<{ Params: ParamsUuid; Body: UpdateEventSharingDto }>,
		reply: FastifyReply<{ Body: EventSharingFullDataResponseDto }>
	) {
		const updatedEntity = await this.eventSharesService.update(req.params.uuid, req.body)

		reply.status(200).send(updatedEntity)
	}

	@Delete('/:id')
	@Validate({
		params: paramsUuid,
		response: {
			204: z.undefined().openapi({
				type: 'null',
			}),
		},
	})
	async delete(
		req: FastifyRequest<{ Params: ParamsUuid }>,
		reply: FastifyReply<{ Body: undefined }>
	) {
		await this.eventSharesService.delete(req.params.uuid)

		reply.status(204).send()
	}
}
