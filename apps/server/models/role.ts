import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'
import { DataTypes } from '@sequelize/core'

import { Role, roleType } from 'shared/types'

import { BaseModel } from './baseModel'

@Table({ tableName: 'roles', modelName: 'Role' })
export class RoleModel extends BaseModel<RoleModel> implements Role {
	@Attribute(DataTypes.ENUM(roleType.options))
	@NotNull
	@Default('user')
	declare type: Role['type']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare description: Role['description']
}
