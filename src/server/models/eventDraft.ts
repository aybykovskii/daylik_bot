import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, BelongsTo, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { Event, eventPeriod } from '~common/event'

import { BaseModel } from './baseModel'
import { UserModel } from './user'

@Table({ tableName: 'eventDrafts', modelName: 'EventDraft' })
export class EventDraftModel extends BaseModel<EventDraftModel> implements Event {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: Event['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare date: Event['date']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare time: Event['time']

	@Attribute(DataTypes.ENUM(eventPeriod.Values))
	@NotNull
	@Default(eventPeriod.Values.everyDay)
	declare period: Event['period']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare text: Event['text']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare weekDayNumber: Event['weekDayNumber']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare monthDayNumber: Event['monthDayNumber']

	/** Defined by {@link UserModel.eventDraft} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asEventDraftInfo(): Event {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			date: this.date,
			time: this.time,
			period: this.period,
			text: this.text,
			weekDayNumber: this.weekDayNumber,
			monthDayNumber: this.monthDayNumber,
		}
	}
}
