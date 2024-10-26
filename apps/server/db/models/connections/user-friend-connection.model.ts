import { DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { UserFriendConnectionFullData } from 'shared'

import { BaseIntModel } from '../base.model'
import { UserModel } from '../user.model'

@Table({ tableName: 'userFriends', modelName: 'UserFriend' })
export class UserFriendConnectionModel
	extends BaseIntModel<UserFriendConnectionModel>
	implements UserFriendConnectionFullData
{
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: UserFriendConnectionFullData['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare friendId: UserFriendConnectionFullData['friendId']

	/** Defined by {@link UserModel} */
	declare friend: NonAttribute<UserModel>

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>
}
