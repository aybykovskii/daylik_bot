import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { UserStatisticsDto, UserStatisticsFullData } from 'shared'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'statistics', modelName: 'Statistics' })
export class StatisticsModel
	extends BaseIntModel<StatisticsModel>
	implements UserStatisticsFullData
{
	@Attribute(DataTypes.INTEGER)
	@NotNull()
	declare userId: UserStatisticsFullData['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare sentRequestsCount: UserStatisticsFullData['sentRequestsCount']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare createdEventsCount: UserStatisticsFullData['createdEventsCount']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare sharedEventsCount: UserStatisticsFullData['sharedEventsCount']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare friendsCount: UserStatisticsFullData['friendsCount']

	@Attribute(DataTypes.FLOAT)
	@NotNull
	@Default(0)
	declare activityRating: UserStatisticsFullData['activityRating']

	/** Defined by {@link UserModel.events} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): UserStatisticsDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			sentRequestsCount: this.sentRequestsCount,
			createdEventsCount: this.createdEventsCount,
			sharedEventsCount: this.sharedEventsCount,
			friendsCount: this.friendsCount,
			activityRating: this.activityRating,
		}
	}

	asFullData(): UserStatisticsFullData {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			sentRequestsCount: this.sentRequestsCount,
			createdEventsCount: this.createdEventsCount,
			sharedEventsCount: this.sharedEventsCount,
			friendsCount: this.friendsCount,
			activityRating: this.activityRating,
			user: this.user,
		}
	}
}
