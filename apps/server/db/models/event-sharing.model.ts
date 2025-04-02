import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
} from '@sequelize/core'
import { AllowNull, Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { EventSharingDto, EventSharingFullData } from 'types/event-shares'

import { BaseUuidModel } from './base.model'
import { EventModel } from './event.model'
import { UserModel } from './user.model'

@Table({ tableName: 'eventShares', modelName: 'EventSharing' })
export class EventSharingModel extends BaseUuidModel<EventSharingModel> {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: EventSharingDto['userId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare eventId: EventSharingDto['eventId']

	@Attribute(DataTypes.INTEGER)
	@AllowNull
	declare targetUserId: CreationOptional<EventSharingDto['targetUserId']>

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(1)
	declare usageLimit: CreationOptional<EventSharingDto['usageLimit']>

	@Attribute(DataTypes.INTEGER)
	@AllowNull
	@Default(0)
	declare usageAmount: CreationOptional<EventSharingDto['usageAmount']>

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
			...this.getBaseDto(),
			userId: this.userId,
			eventId: this.eventId,
			targetUserId: this.targetUserId,
			usageLimit: this.usageLimit,
			usageAmount: this.usageAmount,
		}
	}

	async asFullData(): Promise<EventSharingFullData> {
		const dto = this.asDto()
		const user = await this.getUser()
		const userDto = await user!.asDto()
		const event = await this.getEvent()
		const eventDto = await event!.asDto()
		const targetUser = await this.getTargetUser()
		const targetUserDto = await targetUser!.asDto()

		return {
			...dto,
			user: userDto,
			event: eventDto,
			targetUser: targetUserDto,
		}
	}
}
