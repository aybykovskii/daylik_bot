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

import { EventModel } from '@models/event'

import { Controller, Method, Route, Validate } from '../metadata'

@Controller('/events')
export class EventsController {
	@Route('/')
	getEvents = async (_req: Request, res: Response<Event[]>) => {
		res.json((await EventModel.findAll()).map((event) => event.asEventInfo()))
	}

	@Route('/')
	@Method('post')
	@Validate(eventBase.omit({ period: true }))
	createEvent = async (req: BodyRequest<CreateEventArg>, res: Response<Event | ErrorResponse>) => {
		const event = await EventModel.create(req.body)

		res.status(201).json(event.asEventInfo())
	}

	@Route('/:id')
	getEvent = async (req: ParamsRequest<{ id: ModelId }>, res: Response<Event>) => {
		const event = await EventModel.findByPk(req.params.id)

		if (!event) {
			res.status(404).send()
			return
		}

		res.json(event.asEventInfo())
	}

	@Route('/:id')
	@Method('delete')
	deleteEvent = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<undefined | ErrorResponse>
	) => {
		const event = await EventModel.findByPk(req.params.id)

		if (!event) {
			res.status(404).send()
			return
		}

		await event.destroy()

		res.status(204).send()
	}
}
