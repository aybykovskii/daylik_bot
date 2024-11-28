import { RoleBase, RoleType } from 'shared'

import { BadRequestError, NotFoundError } from 'common'
import { Service } from 'common/decorators'
import { RoleModel } from 'db/models'

import { DbService } from 'modules/db'

@Service({ name: 'rolesService', services: [DbService] })
export class RolesService {
	constructor(private readonly dbService: DbService) {}

	private readonly selectFields = { type: true, description: true }

	async get<
		IsInternal extends boolean = false,
		Result = IsInternal extends true ? RoleModel : RoleBase,
	>(type: RoleType, isInternal?: IsInternal): Promise<Result> {
		const role = await this.dbService.role.findOne({
			where: { type },
		})

		if (!role) {
			throw new NotFoundError('server.error.roles.not_found')
		}

		return (isInternal ? role : role.asDto()) as Result
	}

	getAll() {
		return this.dbService.role.findAll()
	}

	async create({ type, description }: RoleBase) {
		const role = await this.dbService.role.findOne({ where: { type } })

		if (role) {
			throw new BadRequestError('server.error.roles.already_exists')
		}

		const newRole = await this.dbService.role.create({ type, description })

		return newRole.asDto()
	}

	async update({ type, description }: RoleBase) {
		const role = await this.get(type, true)

		return role.update({ description })
	}

	async delete(type: RoleType) {
		const role = await this.get(type, true)

		return role.destroy()
	}
}
