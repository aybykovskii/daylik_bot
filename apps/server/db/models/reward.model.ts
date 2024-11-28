import { DataTypes, HasManyGetAssociationsMixin, NonAttribute } from '@sequelize/core'
import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { RewardDto, RewardFullData } from 'shared'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'rewards', modelName: 'Reward' })
export class RewardModel extends BaseIntModel<RewardModel> implements RewardFullData {
	@Attribute(DataTypes.STRING)
	@NotNull()
	declare name: RewardFullData['name']

	@Attribute(DataTypes.STRING)
	@NotNull()
	declare description: RewardFullData['description']

	/** Defined by {@link UserModel} */
	declare users: NonAttribute<UserModel[]>
	declare getUsers: HasManyGetAssociationsMixin<UserModel>

	asDto(): RewardDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			name: this.name,
			description: this.description,
		}
	}

	async asFullData(): Promise<RewardFullData> {
		const dto = this.asDto()
		const users = await this.getUsers()
		const usersDto = await users.map((user) => user.asDto())

		return {
			...dto,
			users: usersDto,
		}
	}
}
