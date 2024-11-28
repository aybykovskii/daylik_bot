import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
} from '@sequelize/core'
import { AllowNull, Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { EventSharingDto, EventSharingFullData, EventSharingFullDataResponseDto } from 'shared'

import { BaseUuidModel } from './base.model'
import { EventModel } from './event.model'
import { UserModel } from './user.model'

@Table({ tableName: 'eventShares', modelName: 'EventSharing' })
export class EventSharingModel
	extends BaseUuidModel<EventSharingModel>
	implements EventSharingFullData
{
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: EventSharingFullData['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare eventId: EventSharingFullData['eventId']

	@Attribute(DataTypes.INTEGER)
	@AllowNull
	declare targetUserId: CreationOptional<EventSharingFullData['targetUserId']>

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(1)
	declare usageLimit: CreationOptional<EventSharingFullData['usageLimit']>

	@Attribute(DataTypes.INTEGER)
	@AllowNull
	@Default(0)
	declare usageAmount: CreationOptional<EventSharingFullData['usageAmount']>

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	/** Defined by {@link UserModel} */
	declare targetUser: NonAttribute<UserModel | null>
	declare getTargetUser: BelongsToGetAssociationMixin<UserModel>

	/** Defined by {@link EventModel} */
	declare event: NonAttribute<EventModel>
	declare getEvent: BelongsToGetAssociationMixin<EventModel>

	asDto(): EventSharingDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			eventId: this.eventId,
			targetUserId: this.targetUserId,
			usageLimit: this.usageLimit,
			usageAmount: this.usageAmount,
		}
	}

	async asFullData(): Promise<EventSharingFullDataResponseDto> {
		const dto = this.asDto()
		const user = await this.getUser()
		const userDto = await user!.asFullData()
		const event = await this.getEvent()
		const eventDto = await event!.asFullData()
		const targetUser = await this.getTargetUser()
		const targetUserDto = await targetUser!.asFullData()

		return {
			...dto,
			user: userDto,
			event: eventDto,
			targetUser: targetUserDto,
		}
	}
}
