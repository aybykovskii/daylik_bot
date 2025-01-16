import { FastifyReply, FastifyRequest } from 'fastify'

import {
	ParamsId,
	SettingsResponseDto,
	UpdateSettingsDto,
	paramsId,
	settingsResponseDto,
	updateSettingsDto,
} from 'shared'

import { Controller, Get, Patch, Validate } from '@common'

import { SettingsService } from './settings.service'

@Controller('/settings', [SettingsService])
export class SettingsController {
	constructor(private readonly settingsService: SettingsService) {}

	@Get('/:id')
	@Validate({
		params: paramsId,
		response: {
			200: settingsResponseDto,
		},
	})
	async get(
		req: FastifyRequest<{ Params: ParamsId }>,
		reply: FastifyReply<{ Body: SettingsResponseDto }>
	) {
		const entity = await this.settingsService.get(req.params.id)

		reply.status(200).send(entity)
	}

	@Patch('/:id')
	@Validate({
		params: paramsId,
		body: updateSettingsDto,
		response: {
			200: settingsResponseDto,
		},
	})
	async update(
		req: FastifyRequest<{ Params: ParamsId; Body: UpdateSettingsDto }>,
		reply: FastifyReply<{ Body: SettingsResponseDto }>
	) {
		const updatedEntity = await this.settingsService.update(req.params.id, req.body)

		reply.status(200).send(updatedEntity)
	}
}
