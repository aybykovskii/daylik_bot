import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { AllowNull, Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'
import { EventDraftDto, EventDraftFullData } from 'types/event-drafts'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'eventDrafts', modelName: 'EventDraft' })
export class EventDraftModel extends BaseIntModel<EventDraftModel> {
  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare userId: EventDraftDto['userId']

  @Attribute(DataTypes.STRING)
  @NotNull
  declare date: EventDraftDto['date']

  @Attribute(DataTypes.STRING)
  @AllowNull
  declare time: EventDraftDto['time']

  @Attribute(DataTypes.TEXT)
  @NotNull
  declare emoji: EventDraftDto['emoji']

  @Attribute(DataTypes.STRING)
  @NotNull
  declare text: EventDraftDto['text']

  /** Defined by {@link UserModel.eventDraft} */
  declare user: NonAttribute<UserModel>
  declare getUser: BelongsToGetAssociationMixin<UserModel>

  asDto(): EventDraftDto {
    return {
      ...this.getBaseDto(),
      userId: this.userId,
      date: this.date,
      time: this.time,
      text: this.text,
      emoji: this.emoji,
    }
  }

  async asFullData(): Promise<EventDraftFullData> {
    const user = await this.getUser()
    const userDto = await user!.asDto()

    return {
      ...this.asDto(),
      user: userDto,
    }
  }
}
