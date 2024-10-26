import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { AllowNull, Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { EventDraftDto, EventDraftFullData } from 'shared'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'eventDrafts', modelName: 'EventDraft' })
export class EventDraftModel extends BaseIntModel<EventDraftModel> implements EventDraftFullData {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: EventDraftFullData['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare date: EventDraftFullData['date']

	@Attribute(DataTypes.STRING)
	@AllowNull
	declare time: EventDraftFullData['time']

	@Attribute(DataTypes.TEXT)
	@NotNull
	declare emoji: EventDraftFullData['emoji']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare text: EventDraftFullData['text']

	/** Defined by {@link UserModel.eventDraft} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): EventDraftDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			date: this.date,
			time: this.time,
			text: this.text,
			emoji: this.emoji,
		}
	}
}
