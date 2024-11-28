import { DataTypes, HasManyGetAssociationsMixin, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { RoleDto, RoleFullData, roleType } from 'shared/types'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'roles', modelName: 'Role' })
export class RoleModel extends BaseIntModel<RoleModel> implements RoleFullData {
	@Attribute(DataTypes.ENUM(roleType.options))
	@NotNull
	@Default('user')
	declare type: RoleFullData['type']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare description: RoleFullData['description']

	/** Defined by {@link UserModel} */
	declare users: NonAttribute<UserModel[]>
	declare getUsers: HasManyGetAssociationsMixin<UserModel>

	asDto(): RoleDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			type: this.type,
			description: this.description,
		}
	}

	async asFullData(): Promise<RoleFullData> {
		const dto = this.asDto()
		const users = await this.getUsers()
		const usersDto = await users.map((user) => user.asDto())

		return {
			...dto,
			users: usersDto,
		}
	}
}
