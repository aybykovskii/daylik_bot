import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { AllowNull, Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { EventSharingDto, EventSharingFullData } from 'shared'

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
	declare targetUserId: EventSharingFullData['targetUserId']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(1)
	declare usageLimit: EventSharingFullData['usageLimit']

	@Attribute(DataTypes.INTEGER)
	@AllowNull
	@Default(0)
	declare usageAmount: EventSharingFullData['usageAmount']

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

	asFullData(): EventSharingFullData {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			eventId: this.eventId,
			targetUserId: this.targetUserId,
			usageLimit: this.usageLimit,
			usageAmount: this.usageAmount,
			user: this.user,
			event: this.event,
			targetUser: this.targetUser,
		}
	}
}
