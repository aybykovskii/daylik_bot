import { DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { UserRewardConnectionFullData } from 'shared'

import { BaseIntModel } from '../base.model'
import { RewardModel } from '../reward.model'
import { UserModel } from '../user.model'

@Table({ tableName: 'userRewards', modelName: 'UserReward' })
export class UserRewardConnectionModel
	extends BaseIntModel<UserRewardConnectionModel>
	implements UserRewardConnectionFullData
{
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: UserRewardConnectionFullData['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare rewardId: UserRewardConnectionFullData['rewardId']

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>

	/** Defined by {@link RewardModel} */
	declare reward: NonAttribute<RewardModel>
}
