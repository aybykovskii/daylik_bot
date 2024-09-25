import { DataTypes } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { BaseModel } from './baseModel'

@Table({ tableName: 'userRoles', modelName: 'UserRole' })
export class UserRoleModel extends BaseModel<UserRoleModel> {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: number

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare roleId: number
}
