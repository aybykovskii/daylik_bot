import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { UserSettingsDto, UserSettingsFullData } from 'shared'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'settings', modelName: 'Settings' })
export class SettingsModel extends BaseIntModel<SettingsModel> implements UserSettingsFullData {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: UserSettingsFullData['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	@Default('08:00')
	declare notificationTime: UserSettingsFullData['notificationTime']

	@Attribute(DataTypes.JSONB)
	@Default({})
	declare stylization: UserSettingsFullData['stylization']

	/** Defined by {@link UserModel.events} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): UserSettingsDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			notificationTime: this.notificationTime,
			stylization: this.stylization,
		}
	}

	asFullData(): UserSettingsFullData {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			notificationTime: this.notificationTime,
			stylization: this.stylization,
			user: this.user,
		}
	}
}
