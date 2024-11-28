import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
} from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { FriendshipRequestDto, FriendshipRequestFullData, friendshipRequestStatus } from 'shared'

import { BaseUuidModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'friendshipRequests', modelName: 'FriendshipRequest' })
export class FriendshipRequestModel
	extends BaseUuidModel<FriendshipRequestModel>
	implements FriendshipRequestFullData
{
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: FriendshipRequestFullData['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare targetUserId: FriendshipRequestFullData['targetUserId']

	@Attribute(DataTypes.ENUM(friendshipRequestStatus.options))
	@NotNull
	@Default(friendshipRequestStatus.Values.pending)
	declare status: CreationOptional<FriendshipRequestFullData['status']>

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	/** Defined by {@link UserModel} */
	declare targetUser: NonAttribute<UserModel>
	declare getTargetUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): FriendshipRequestDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			targetUserId: this.targetUserId,
			status: this.status,
		}
	}

	async asFullData(): Promise<FriendshipRequestFullData> {
		const dto = this.asDto()
		const user = await this.getUser()
		const userDto = await user!.asDto()
		const targetUser = await this.getTargetUser()
		const targetUserDto = await targetUser!.asDto()

		return {
			...dto,
			user: userDto,
			targetUser: targetUserDto,
		}
	}
}
