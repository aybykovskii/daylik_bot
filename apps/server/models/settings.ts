import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { Settings } from 'shared/types'

import { BaseModel } from './baseModel'
import { UserModel } from './user'

@Table({ tableName: 'settings', modelName: 'Settings' })
export class SettingsModel extends BaseModel<SettingsModel> implements Settings {
	@Attribute(DataTypes.STRING)
	@NotNull
	@Default('08:00')
	declare notificationTime: Settings['notificationTime']

	@Attribute(DataTypes.JSONB)
	@Default({})
	declare stylization: Settings['stylization']

	/** Defined by {@link UserModel.events} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>
}
