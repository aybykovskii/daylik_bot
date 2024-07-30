import { Request, Response } from 'express'

import {
	BodyRequest,
	CreateEventArg,
	ErrorResponse,
	Event,
	ModelId,
	ParamsRequest,
	eventBase,
} from '~types'

import { EventDraftModel } from '@models/eventDraft'

import { Controller, Method, Route, Validate } from '../metadata'

@Controller('/eventDrafts')
export class EventDraftsController {
	@Route('/')
	getEventDrafts = async (_req: Request, res: Response<Event[]>) => {
		res.json((await EventDraftModel.findAll()).map((event) => event.asEventDraftInfo()))
	}

	@Route('/')
	@Method('post')
	@Validate(eventBase.omit({ period: true }))
	createEventDraft = async (
		req: BodyRequest<CreateEventArg>,
		res: Response<Event | ErrorResponse>
	) => {
		const eventDraft = await EventDraftModel.create({ ...req.body, period: 'once' })

		res.status(201).json(eventDraft.asEventDraftInfo())
	}

	@Route('/:id')
	getEventDraft = async (req: ParamsRequest<{ id: ModelId }>, res: Response<Event>) => {
		const eventDraft = await EventDraftModel.findByPk(req.params.id)

		if (!eventDraft) {
			res.status(404).send()
			return
		}

		res.json(eventDraft.asEventDraftInfo())
	}

	@Route('/:id')
	@Method('delete')
	deleteEventDraft = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<undefined | ErrorResponse>
	) => {
		const event = await EventDraftModel.findByPk(req.params.id)

		if (!event) {
			res.status(404).send()
			return
		}

		await event.destroy()

		res.status(204).send()
	}
}
