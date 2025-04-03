import { BelongsToGetAssociationMixin, DataTypes, HasManyGetAssociationsMixin, NonAttribute } from '@sequelize/core'
import { AllowNull, Attribute, HasMany, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { EventDto, EventFullData } from '@/types/events'

import { BaseIntModel } from './base.model'
import { EventSharingModel } from './event-sharing.model'
import { UserModel } from './user.model'

@Table({ tableName: 'events', modelName: 'Event' })
export class EventModel extends BaseIntModel<EventModel> {
  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare userId: EventDto['userId']

  @Attribute(DataTypes.STRING)
  @NotNull
  declare date: EventDto['date']

  @Attribute(DataTypes.STRING)
  @AllowNull
  declare time: EventDto['time']

  @Attribute(DataTypes.DATE)
  declare datetime: EventDto['datetime']

  @Attribute(DataTypes.DATE)
  declare notificationDatetime: EventDto['notificationDatetime']

  @Attribute(DataTypes.TEXT)
  @NotNull
  declare emoji: EventDto['emoji']

  @Attribute(DataTypes.STRING)
  @NotNull
  declare text: EventDto['text']

  @Attribute(DataTypes.INTEGER)
  @AllowNull
  declare copyFromId: EventDto['copyFromId']

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
      ...this.getBaseDto(),
      userId: this.userId,
      date: this.date,
      time: this.time,
      datetime: this.datetime,
      notificationDatetime: this.notificationDatetime,
      text: this.text,
      emoji: this.emoji,
      copyFromId: this.copyFromId,
    }
  }

  async asFullData(): Promise<EventFullData> {
    const dto = this.asDto()
    const user = await this.getUser()
    const userDto = await user!.asDto()
    const shares = await this.getShares()
    const sharesDto = await shares.map((share) => share.asDto())
    const copyFrom = await this.getCopyFrom()
    const copyFromDto = (await copyFrom?.asDto()) ?? null
    const copies = await this.getCopies()
    const copiesDto = await copies.map((copy) => copy.asDto())

    return {
      ...dto,
      user: userDto,
      shares: sharesDto,
      copyFrom: copyFromDto,
      copies: copiesDto,
    }
  }
}
