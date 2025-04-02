import { DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { UserRewardConnectionDto } from 'types/user-rewards'

import { BaseIntModel } from '../base.model'
import { RewardModel } from '../reward.model'
import { UserModel } from '../user.model'

@Table({ tableName: 'userRewards', modelName: 'UserReward' })
export class UserRewardConnectionModel extends BaseIntModel<UserRewardConnectionModel> {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: UserRewardConnectionDto['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare rewardId: UserRewardConnectionDto['rewardId']

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>

	/** Defined by {@link RewardModel} */
	declare reward: NonAttribute<RewardModel>
}
