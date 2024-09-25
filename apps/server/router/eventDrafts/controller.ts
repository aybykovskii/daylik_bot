import { Request, Response } from 'express'
import { z } from 'zod'

import {
	BodyRequest,
	CreateEventArg,
	ErrorResponse,
	Event,
	ModelId,
	ParamsRequest,
	eventBase,
	modelId,
} from 'shared/types'

import { EventDraftModel } from '@models/eventDraft'

import dayjs from 'dayjs'
import { Controller, Method, Route, ValidateBody, ValidateParams } from '../metadata'

@Controller('/eventDrafts')
export class EventDraftsController {
	@Route('/')
	getEventDrafts = async (_req: Request, res: Response<Event[]>) => {
		res.json((await EventDraftModel.findAll()).map((event) => event.asEventDraftInfo()))
	}

	@Route('/')
	@Method('post')
	@ValidateBody(eventBase.omit({ period: true, weekDayNumber: true, monthDayNumber: true }))
	createEventDraft = async (
		req: BodyRequest<CreateEventArg>,
		res: Response<Event | ErrorResponse>
	) => {
		const date = dayjs(req.body.date)

		const eventDraft = await EventDraftModel.create({
			...req.body,
			period: 'once',
			weekDayNumber: date.day() + 1,
			monthDayNumber: date.date(),
		})

		res.status(201).json(eventDraft.asEventDraftInfo())
	}

	@Route('/:id')
	@ValidateParams(z.object({ id: modelId }))
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
	@ValidateParams(z.object({ id: modelId }))
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
