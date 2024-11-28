import { Op } from '@sequelize/core'

import { UserBase, UserDto, UserFullData } from 'shared'

import { BadRequestError, NotFoundError, Service } from '@common'

import { DbService } from '../db'
import { RolesService } from '../roles'

@Service({ name: 'usersService', services: [DbService, RolesService] })
export class UsersService {
	constructor(
		private readonly dbService: DbService,
		private readonly rolesService: RolesService
	) {}

	async getOneInternal<
		IsInternal extends boolean = false,
		Result = IsInternal extends true ? DbService['UserModel'] : UserBase,
	>(id: number | string, isInternal?: IsInternal): Promise<Result> {
		const user = await this.dbService.user.findOne({
			where: { [Op.or]: [{ id }, { telegramUserId: id.toString() }] },
		})

		if (!user) {
			throw new NotFoundError('server.error.users.not_found')
		}

		return (isInternal ? user : user.asDto()) as Result
	}

	async getAll() {
		const users = await this.dbService.user.findAll()

		return users
	}

	async create(dto: UserBase): Promise<UserDto> {
		const user = await this.dbService.user.findOne({
			where: { telegramUserId: dto.telegramUserId },
		})

		if (user) {
			throw new BadRequestError('server.error.users.already_exists')
		}

		const newUser = await this.dbService.user.create(dto)
		const userRole = await this.rolesService.get('user', true)

		await newUser.addRole(userRole)

		return newUser.asDto()
	}

	async get(telegramOrUserId: number | string): Promise<UserFullData> {
		return (await this.getOneInternal(telegramOrUserId, true)).asFullData()
	}

	async update(id: number, dto: UserBase): Promise<UserDto> {
		const user = await this.getOneInternal(id, true)

		const userDto = (await user.update(dto)).asDto()

		return userDto
	}

	async delete(id: number): Promise<void> {
		const user = await this.getOneInternal(id, true)

		await user.destroy()
	}
}
