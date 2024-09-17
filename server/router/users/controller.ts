import { Op } from '@sequelize/core'
import { Request, Response } from 'express'
import { z } from 'zod'

import {
	BodyRequest,
	CreateUserArg,
	CreateUserResponse,
	ErrorResponse,
	ModelId,
	ParamsRequest,
	TelegramUserId,
	User,
	UserCustomization,
	UserFullData,
	modelId,
	telegramUserId,
	userBase,
} from '~types'

import { UserModel } from '@models/user'

import { Controller, Method, Route, ValidateBody, ValidateParams } from '../metadata'

@Controller('/users')
export class UsersController {
	@Route('/')
	getUsers = async (_req: Request, res: Response<User[]>) => {
		return res.json((await UserModel.findAll()).map((user) => user.asUserInfo()))
	}

	@Route('/')
	@Method('post')
	@ValidateBody(userBase.pick({ firstName: true, lastName: true, telegramUserId: true }))
	createUser = async (
		{ body: { lastName, firstName, telegramUserId } }: BodyRequest<CreateUserArg>,
		res: Response<CreateUserResponse | ErrorResponse>
	) => {
		const user = await UserModel.create({
			firstName: firstName ?? '',
			lastName: lastName ?? '',
			telegramUserId: telegramUserId,
			customization: {},
			requestsSent: 0,
			access: 'trial',
		})

		return res.json(user.asUserInfo())
	}

	@Route('/:id')
	@ValidateParams(z.object({ id: modelId.or(telegramUserId) }))
	getUser = async (
		req: ParamsRequest<{ id: ModelId | TelegramUserId }>,
		res: Response<UserFullData | ErrorResponse>
	) => {
		const user = await UserModel.findOne({
			where: { [Op.or]: { id: req.params.id, telegramUserId: req.params.id } },
		})

		if (!user) {
			res.status(404).json({ error: req.t('server.error.users.not_found') })
			return
		}

		res.json({
			...user.asUserInfo(),
			eventDraft: await user.getEventDraft(),
			events: await user.getEvents(),
			payments: await user.getPayments(),
			currentPayment: await user.getCurrentPayment(),
		})
	}

	@Route('/:id/customization')
	@Method('patch')
	@ValidateParams(z.object({ id: modelId }))
	updateCustomization = async (
		req: Request<{ id: ModelId }, unknown, UserCustomization>,
		res: Response<undefined | ErrorResponse>
	) => {
		const user = await UserModel.findByPk(req.params.id)

		if (!user) {
			res.status(404).json({ error: req.t('server.error.users.not_found') })
			return
		}

		await user.update({ customization: req.body })

		res.status(200)
	}

	@Route('/:id/increaseSentRequest')
	@Method('post')
	@ValidateParams(z.object({ id: modelId }))
	increaseSentRequest = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<number | ErrorResponse>
	) => {
		const result = await UserModel.findByPk(req.params.id)

		if (!result) {
			res.status(404).json({ error: req.t('server.error.users.not_found') })
			return
		}

		const updateResult = await result.increment('requestsSent')

		res.json(updateResult.requestsSent)
	}

	@Route('/:id/license')
	@Method('post')
	@ValidateParams(z.object({ id: modelId }))
	addLicense = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<undefined | ErrorResponse>
	) => {
		const result = await UserModel.findByPk(req.params.id)

		if (!result) {
			res.status(404).json({ error: req.t('server.error.users.not_found') })
			return
		}

		await result.update({ access: 'license' })

		return res.status(200)
	}
}
