import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { Statistics } from 'shared/types'

import { BaseModel } from './baseModel'
import { UserModel } from './user'

@Table({ tableName: 'statistics', modelName: 'Statistics' })
export class StatisticsModel extends BaseModel<StatisticsModel> implements Statistics {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare sentRequestsCount: number

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare createdEventsCount: number

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare sharedEventsCount: number

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare friendsCount: number

	@Attribute(DataTypes.FLOAT)
	@NotNull
	@Default(0)
	declare activityRating: number

	/** Defined by {@link UserModel.events} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>
}
