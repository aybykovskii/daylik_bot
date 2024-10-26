import { DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { UserRoleConnectionFullData } from 'shared'

import { BaseIntModel } from '../base.model'
import { RoleModel } from '../role.model'
import { UserModel } from '../user.model'

@Table({ tableName: 'userRoles', modelName: 'UserRole' })
export class UserRoleConnectionModel
	extends BaseIntModel<UserRoleConnectionModel>
	implements UserRoleConnectionFullData
{
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: UserRoleConnectionFullData['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare roleId: UserRoleConnectionFullData['roleId']

	/** Defined by {@link RoleModel} */
	declare role: NonAttribute<RoleModel>

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>
}
