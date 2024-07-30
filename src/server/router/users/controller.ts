import { Op } from '@sequelize/core'
import { Request, Response } from 'express'

import {
	BodyRequest,
	CreateUserArg,
	ErrorResponse,
	ModelId,
	ParamsRequest,
	TelegramUserId,
	User,
	UserFullData,
	userBase,
} from '~types'

import { UserModel } from '@models/user'

import { Controller, Method, Route, Validate } from '../metadata'

@Controller('/users')
export class UsersController {
	@Route('/')
	getUsers = async (_req: Request, res: Response<User[]>) => {
		return res.json((await UserModel.findAll()).map((user) => user.asUserInfo()))
	}

	@Route('/')
	@Method('post')
	@Validate(userBase.pick({ firstName: true, lastName: true, telegramUserId: true }))
	createUser = async ({ body }: BodyRequest<CreateUserArg>, res: Response<User | ErrorResponse>) => {
		const user = await UserModel.create({ ...body, requestsSent: 0, access: 'trial' })

		return res.json(user.asUserInfo())
	}

	@Route('/:id')
	getUser = async (
		req: ParamsRequest<{ id: ModelId | TelegramUserId }>,
		res: Response<UserFullData | ErrorResponse>
	) => {
		const user = await UserModel.findOne({
			where: { [Op.or]: { id: req.params.id, telegramUserId: req.params.id } },
		})

		if (!user) {
			res.status(404).json({ error: 'User not found' })
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

	@Route('/:id/increaseSentRequest')
	@Method('post')
	increaseSentRequest = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<number | ErrorResponse>
	) => {
		const result = await UserModel.findByPk(req.params.id)
		console.log({ user: result })

		if (!result) {
			res.status(404).json({ error: 'User not found' })
			return
		}

		const updateResult = await result.increment('requestsSent')

		console.log({ updateResult })

		res.json(updateResult.requestsSent)
	}

	@Route('/:id/license')
	@Method('post')
	addLicense = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<undefined | ErrorResponse>
	) => {
		const result = await UserModel.findByPk(req.params.id)

		if (!result) {
			res.status(404).json({ error: 'User not found' })
			return
		}

		await result.update({ access: 'license' })

		return res.status(200)
	}
}
