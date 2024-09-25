import { Response } from 'express'
import { sign } from 'jsonwebtoken'
import { z } from 'zod'

import { env } from 'shared/environment'
import { ParamsRequest, telegramUserId } from 'shared/types'

import { UserModel } from '@models'
import { Controller, Method, Route, ValidateParams } from '@router/metadata'

@Controller('')
export class AuthController {
	@Route('/:id')
	@Method('post')
	@ValidateParams(z.object({ id: telegramUserId }))
	login = async (
		req: ParamsRequest<{ id: number }>,
		res: Response<{ token: string } | { error: string }>
	) => {
		const user = await UserModel.findOne({ where: { telegramUserId: req.params.id } })

		if (!user) {
			res.status(404).send({ error: req.t('server.error.users.not_found') })
			return
		}

		const token = sign({ userId: user.id }, env.JWT_SECRET, { expiresIn: '1h' })
		res.setHeader('Authorization', `Bearer ${token}`)
		res.status(201).send({ token })
	}
}
