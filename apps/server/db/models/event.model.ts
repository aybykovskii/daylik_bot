import {
	BelongsToGetAssociationMixin,
	DataTypes,
	HasManyGetAssociationsMixin,
	NonAttribute,
} from '@sequelize/core'
import { AllowNull, Attribute, HasMany, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { EventDto, EventFullData, EventFullDataResponseDto } from 'shared/types'

import { BaseIntModel } from './base.model'
import { EventSharingModel } from './event-sharing.model'
import { UserModel } from './user.model'

@Table({ tableName: 'events', modelName: 'Event' })
export class EventModel extends BaseIntModel<EventModel> implements EventFullData {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: EventFullData['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare date: EventFullData['date']

	@Attribute(DataTypes.STRING)
	@AllowNull
	declare time: EventFullData['time']

	@Attribute(DataTypes.TEXT)
	@NotNull
	declare emoji: EventFullData['emoji']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare text: EventFullData['text']

	@Attribute(DataTypes.INTEGER)
	@AllowNull
	declare copyFromId: EventFullData['copyFromId']

	@HasMany(() => EventSharingModel, {
		foreignKey: 'eventId',
		inverse: 'event',
	})
	declare shares: NonAttribute<EventSharingModel[]>
	declare getShares: HasManyGetAssociationsMixin<EventSharingModel>

	@HasMany(() => EventModel, {
		foreignKey: 'copyFromId',
		inverse: {
			as: 'copyFrom',
		},
	})
	declare copies: NonAttribute<EventModel[]>
	declare getCopies: HasManyGetAssociationsMixin<EventModel>

	/** Defined by {@link EventModel} */
	declare copyFrom: NonAttribute<EventModel | null>
	declare getCopyFrom: BelongsToGetAssociationMixin<EventModel>

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): EventDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			date: this.date,
			time: this.time,
			text: this.text,
			emoji: this.emoji,
			copyFromId: this.copyFromId,
		}
	}

	async asFullData(): Promise<EventFullDataResponseDto> {
		const dto = this.asDto()
		const shares = await this.getShares()
		const sharesDto = await shares.map((share) => share.asDto())
		const copyFrom = await this.getCopyFrom()
		const copyFromDto = (await copyFrom?.asDto()) ?? null
		const copies = await this.getCopies()
		const copiesDto = await copies.map((copy) => copy.asDto())

		return {
			...dto,
			shares: sharesDto,
			copyFrom: copyFromDto,
			copies: copiesDto,
		}
	}
}
