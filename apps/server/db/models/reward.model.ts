import { DataTypes, HasManyGetAssociationsMixin, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { RewardDto, RewardFullData } from '@/types/rewards'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'rewards', modelName: 'Reward' })
export class RewardModel extends BaseIntModel<RewardModel> {
  @Attribute(DataTypes.STRING)
  @NotNull()
  declare name: RewardDto['name']

  @Attribute(DataTypes.STRING)
  @NotNull()
  declare description: RewardDto['description']

  /** Defined by {@link UserModel} */
  declare users: NonAttribute<UserModel[]>
  declare getUsers: HasManyGetAssociationsMixin<UserModel>

  asDto(): RewardDto {
    return {
      ...this.getBaseDto(),
      name: this.name,
      description: this.description,
    }
  }

  async asFullData(): Promise<RewardFullData> {
    const dto = this.asDto()
    const users = await this.getUsers()
    const usersDto = users.map((user) => user.asDto())

    return {
      ...dto,
      users: usersDto,
    }
  }
}
