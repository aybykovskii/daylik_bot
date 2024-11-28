import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import {
	CreateEventDraftDto,
	EventDraftResponseDto,
	EventDraftsResponseDto,
	ParamsId,
	UpdateEventDraftDto,
	createEventDraftDto,
	eventDraftResponseDto,
	eventDraftsResponseDto,
	paramsId,
	serverLogger,
	updateEventDraftDto,
} from 'shared'

import { Controller, Delete, Get, Patch, Post, Validate } from '@common'

import { EventDraftsService } from './event-drafts.service'

@Controller('/event_drafts', [EventDraftsService])
export class EventDraftsController {
	constructor(private readonly eventDraftsService: EventDraftsService) {}

	@Get('/')
	@Validate({
		response: {
			200: eventDraftsResponseDto,
		},
	})
	async getAllDrafts(_: FastifyRequest, reply: FastifyReply<{ Body: EventDraftsResponseDto }>) {
		const drafts = await this.eventDraftsService.getAll()

		reply.status(200).send(drafts)
	}

	@Post('/')
	@Validate({
		body: createEventDraftDto,
		response: {
			201: eventDraftResponseDto,
		},
	})
	async createDraft(
		req: FastifyRequest<{ Body: CreateEventDraftDto }>,
		reply: FastifyReply<{ Body: EventDraftResponseDto }>
	) {
		const createdDraft = await this.eventDraftsService.create(req.body)
		serverLogger.info({ createdDraft })
		reply.status(201).send(createdDraft)
	}

	@Get('/:id')
	@Validate({
		params: paramsId,
		response: {
			200: eventDraftResponseDto,
		},
	})
	async getDraft(
		req: FastifyRequest<{ Params: ParamsId }>,
		reply: FastifyReply<{ Body: EventDraftResponseDto }>
	) {
		const draft = await this.eventDraftsService.get(req.params.id)

		reply.status(200).send(draft)
	}

	@Patch('/:id')
	@Validate({
		params: paramsId,
		body: updateEventDraftDto,
		response: {
			200: eventDraftResponseDto,
		},
	})
	async updateDraft(
		req: FastifyRequest<{ Params: ParamsId; Body: UpdateEventDraftDto }>,
		reply: FastifyReply<{ Body: EventDraftResponseDto }>
	) {
		const updatedDraft = await this.eventDraftsService.update(req.params.id, req.body)

		reply.status(200).send(updatedDraft)
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
	async deleteDraft(
		req: FastifyRequest<{ Params: ParamsId }>,
		reply: FastifyReply<{ Body: undefined }>
	) {
		await this.eventDraftsService.delete(req.params.id)

		reply.status(204).send()
	}
}
