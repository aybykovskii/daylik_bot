import { Request, Response } from 'express'

import {
	BodyRequest,
	ErrorResponse,
	ModelId,
	ParamsRequest,
	RoleBase,
	roleSchema,
} from 'shared/types'

import { RoleModel } from '@models'

import { Controller, Method, Route, ValidateBody } from '../metadata'

@Controller('/roles')
export class RolesController {
	@Route('/')
	@Method('post')
	@ValidateBody(roleSchema)
	createRole = async ({ body }: BodyRequest<RoleBase>, res: Response<ErrorResponse | RoleBase>) => {
		const { type, description } = body

		const role = await RoleModel.findOne({ where: { type } })

		if (role) {
			res.status(400).json({ error: 'Role already exists' })
			return
		}

		const newRole = await RoleModel.create({ type, description })

		res.status(201).json(newRole)
	}

	@Route('/:id')
	@Method('patch')
	@ValidateBody(roleSchema)
	updateRole = async (
		req: Request<{ id: ModelId }, unknown, RoleBase>,
		res: Response<ErrorResponse | RoleBase>
	) => {
		const { id } = req.params
		const { type, description } = req.body

		const role = await RoleModel.findByPk(id)

		if (!role) {
			res.status(404).json({ error: 'Role not found' })
			return
		}

		await role.update({ type, description })

		res.status(200).json(role)
	}

	@Route('/:id')
	@Method('delete')
	deleteRole = async (req: ParamsRequest<{ id: ModelId }>, res: Response<ErrorResponse>) => {
		const { id } = req.params

		const role = await RoleModel.findByPk(id)

		if (!role) {
			res.status(404).json({ error: 'Role not found' })
			return
		}

		await role.destroy()

		res.status(204).send()
	}
}
