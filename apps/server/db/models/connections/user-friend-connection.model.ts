import { DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { UserFriendConnectionDto } from '@/types/user-friends'

import { BaseIntModel } from '../base.model'
import { UserModel } from '../user.model'

@Table({ tableName: 'userFriends', modelName: 'UserFriend' })
export class UserFriendConnectionModel extends BaseIntModel<UserFriendConnectionModel> {
  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare userId: UserFriendConnectionDto['userId']

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare friendId: UserFriendConnectionDto['friendId']

  /** Defined by {@link UserModel} */
  declare friend: NonAttribute<UserModel>

  /** Defined by {@link UserModel} */
  declare user: NonAttribute<UserModel>
}
