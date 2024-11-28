import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import {
	CreateEventDto,
	EventResponseDto,
	EventsResponseDto,
	ParamsId,
	createEventDto,
	eventFullDataResponseDto,
	eventResponseDto,
	eventsResponseDto,
	paramsId,
} from 'shared'

import { Controller, Delete, Get, Post, Validate } from '@common'

import { EventsService } from './events.service'

@Controller('/events', [EventsService])
export class EventsController {
	constructor(private readonly eventsService: EventsService) {}

	@Get('/:id')
	@Validate({
		params: paramsId,
		response: {
			200: eventFullDataResponseDto,
		},
	})
	async getEvent({ params }: FastifyRequest<{ Params: ParamsId }>, reply: FastifyReply) {
		const event = await this.eventsService.get(params.id)

		reply.status(200).send(event)
	}

	@Get('/')
	@Validate({
		response: {
			200: eventsResponseDto,
		},
	})
	async getEvents(_: FastifyRequest, reply: FastifyReply<{ Body: EventsResponseDto }>) {
		const events = await this.eventsService.getAll()

		reply.status(200).send(events)
	}

	@Post('/')
	@Validate({
		body: createEventDto,
		response: {
			201: eventResponseDto,
		},
	})
	async createEvent(
		{ body }: FastifyRequest<{ Body: CreateEventDto }>,
		reply: FastifyReply<{ Body: EventResponseDto }>
	) {
		const createdEvent = await this.eventsService.create(body)

		reply.status(201).send(createdEvent)
	}

	@Delete('/:id')
	@Validate({
		params: paramsId,
		response: {
			204: z.undefined().openapi({
				type: 'null',
			}),
		},
	})
	async delete({ params }: FastifyRequest<{ Params: ParamsId }>, reply: FastifyReply) {
		await this.eventsService.delete(params.id)

		reply.status(204).send()
	}
}
