import { BelongsToGetAssociationMixin, CreationOptional, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { StatisticsDto, StatisticsFullData } from '@/types/statistics'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'statistics', modelName: 'Statistics' })
export class StatisticsModel extends BaseIntModel<StatisticsModel> {
  @Attribute(DataTypes.INTEGER)
  @NotNull()
  declare userId: StatisticsDto['userId']

  @Attribute(DataTypes.INTEGER)
  @NotNull
  @Default(0)
  declare sentRequestsCount: CreationOptional<StatisticsDto['sentRequestsCount']>

  @Attribute(DataTypes.FLOAT)
  @NotNull
  @Default(0.0)
  declare activityRating: CreationOptional<StatisticsDto['activityRating']>

  /** Defined by {@link UserModel.events} */
  declare user: NonAttribute<UserModel>
  declare getUser: BelongsToGetAssociationMixin<UserModel>

  async getCreatedEventsCount() {
    const user = await this.getUser()
    const events = await user?.getEvents()

    return events?.length ?? 0
  }

  async getSharedEventsCount() {
    const user = await this.getUser()
    const outgoingEventShares = await user?.getOutgoingEventShares()

    return outgoingEventShares?.length ?? 0
  }

  async getFriendsCount() {
    const user = await this.getUser()
    const friends = await user?.getFriends()

    return friends?.length ?? 0
  }

  async getCalculatedData() {
    return {
      createdEventsCount: await this.getCreatedEventsCount(),
      sharedEventsCount: await this.getSharedEventsCount(),
      friendsCount: await this.getFriendsCount(),
    }
  }

  async asDto(): Promise<StatisticsDto> {
    const calculatedData = await this.getCalculatedData()

    return {
      ...this.getBaseDto(),
      userId: this.userId,
      sentRequestsCount: this.sentRequestsCount,
      activityRating: this.activityRating,
      ...calculatedData,
    }
  }

  async asFullData(): Promise<StatisticsFullData> {
    const dto = await this.asDto()
    const user = await this.getUser()
    const userDto = await user!.asDto()

    return {
      ...dto,
      user: userDto,
    }
  }
}
