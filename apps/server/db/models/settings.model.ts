import { BelongsToGetAssociationMixin, CreationOptional, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { getUTCTimeDiff } from 'shared'

import { Settings, SettingsDto, SettingsFullData } from '@/types/settings'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'settings', modelName: 'Settings' })
export class SettingsModel extends BaseIntModel<SettingsModel> {
  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare userId: Settings['userId']

  @Attribute(DataTypes.INTEGER)
  @NotNull
  @Default(getUTCTimeDiff(3))
  declare UTCTimeDiff: CreationOptional<Settings['UTCTimeDiff']>

  @Attribute(DataTypes.STRING)
  @NotNull
  @Default('08:00')
  declare notificationTime: CreationOptional<Settings['notificationTime']>

  @Attribute(DataTypes.JSONB)
  @Default({})
  declare stylization: CreationOptional<Settings['stylization']>

  /** Defined by {@link UserModel.events} */
  declare user: NonAttribute<UserModel>
  declare getUser: BelongsToGetAssociationMixin<UserModel>

  asDto(): SettingsDto {
    return {
      ...this.getBaseDto(),
      userId: this.userId,
      UTCTimeDiff: this.UTCTimeDiff,
      notificationTime: this.notificationTime,
      stylization: this.stylization,
    }
  }

  async asFullData(): Promise<SettingsFullData> {
    const dto = this.asDto()
    const user = await this.getUser()
    const userDto = await user!.asDto()

    return {
      ...dto,
      user: userDto,
    }
  }
}
