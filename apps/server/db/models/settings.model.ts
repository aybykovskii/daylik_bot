import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
} from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { SettingsDto, SettingsFullData } from 'shared'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'settings', modelName: 'Settings' })
export class SettingsModel extends BaseIntModel<SettingsModel> implements SettingsFullData {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: SettingsFullData['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	@Default('08:00')
	declare notificationTime: CreationOptional<SettingsFullData['notificationTime']>

	@Attribute(DataTypes.JSONB)
	@Default({})
	declare stylization: CreationOptional<SettingsFullData['stylization']>

	/** Defined by {@link UserModel.events} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): SettingsDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			notificationTime: this.notificationTime,
			stylization: this.stylization,
		}
	}

	async asFullData(): Promise<SettingsFullData> {
		const dto = this.asDto()
		const user = await this.getUser()
		const userDto = await user!.asFullData()

		return {
			...dto,
			user: userDto,
		}
	}
}
