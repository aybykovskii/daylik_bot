import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
} from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { Event, eventPeriod } from 'shared/types'

import { BaseModel } from './baseModel'
import { UserModel } from './user'

@Table({ tableName: 'events', modelName: 'Event' })
export class EventModel extends BaseModel<EventModel> implements Event {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: Event['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare date: Event['date']

	@Attribute({
		type: DataTypes.STRING,
		allowNull: true,
	})
	declare time: Event['time']

	@Attribute(DataTypes.ENUM(eventPeriod.Values))
	@NotNull
	@Default(eventPeriod.Values.once)
	declare period: CreationOptional<Event['period']>

	@Attribute(DataTypes.TEXT)
	@NotNull
	declare emoji: Event['emoji']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare text: Event['text']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare weekDayNumber: Event['weekDayNumber']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare monthDayNumber: Event['monthDayNumber']

	/** Defined by {@link UserModel.events} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asEventInfo(): Event {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			date: this.date,
			time: this.time,
			period: this.period,
			text: this.text,
			emoji: this.emoji,
			weekDayNumber: this.weekDayNumber,
			monthDayNumber: this.monthDayNumber,
		}
	}
}
