import { DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { RewardDto, RewardFullData } from 'shared'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'rewards', modelName: 'Reward' })
export class RewardModel extends BaseIntModel<RewardModel> implements RewardFullData {
	@Attribute(DataTypes.STRING)
	@NotNull()
	declare name: RewardFullData['name']

	@Attribute(DataTypes.STRING)
	@NotNull()
	declare description: RewardFullData['description']

	/** Defined by {@link UserModel} */
	declare users: NonAttribute<UserModel[]>

	asDto(): RewardDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			name: this.name,
			description: this.description,
		}
	}

	asFullData(): RewardFullData {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			name: this.name,
			description: this.description,
			users: this.users,
		}
	}

	// @HasMany(() => UserRewardModel, {
	// 	foreignKey: 'rewardId',
	// 	inverse: 'reward',
	// })
	// declare users: NonAttribute<UserRewardModel[]>
	// declare getUsers: HasManyGetAssociationsMixin<UserRewardModel>
}
