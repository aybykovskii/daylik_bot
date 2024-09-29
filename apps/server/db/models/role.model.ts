import { DataTypes, NonAttribute } from '@sequelize/core'
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

	asDto(): RoleDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			type: this.type,
			description: this.description,
		}
	}

	asFullData(): RoleFullData {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			type: this.type,
			description: this.description,
			users: this.users,
		}
	}

	// @HasMany(() => UserRoleModel, {
	// 	foreignKey: 'roleId',
	// 	inverse: 'role',
	// })
	// declare users: NonAttribute<UserRoleModel[]>
	// declare getUsers: HasManyGetAssociationsMixin<UserRoleModel>
}
