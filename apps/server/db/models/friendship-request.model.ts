import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
} from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { typeToArray } from 'common/validation'
import { FriendshipRequestDto, FriendshipRequestFullData, friendshipRequestStatus } from 'types/friendship-requests'

import { BaseUuidModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'friendshipRequests', modelName: 'FriendshipRequest' })
export class FriendshipRequestModel extends BaseUuidModel<FriendshipRequestModel> {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: FriendshipRequestDto['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare targetUserId: FriendshipRequestDto['targetUserId']

	@Attribute(DataTypes.ENUM(typeToArray(friendshipRequestStatus)))
	@NotNull
	@Default('pending' satisfies FriendshipRequestDto['status'])
	declare status: CreationOptional<FriendshipRequestDto['status']>

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	/** Defined by {@link UserModel} */
	declare targetUser: NonAttribute<UserModel>
	declare getTargetUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): FriendshipRequestDto {
		return {
			...this.getBaseDto(),
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
