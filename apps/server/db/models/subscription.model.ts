import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
} from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import {
	SubscriptionDto,
	SubscriptionFullData,
	subscriptionStatus,
	subscriptionType,
} from 'shared/types'

import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'subscriptions', modelName: 'Subscription' })
export class SubscriptionModel
	extends BaseIntModel<SubscriptionModel>
	implements SubscriptionFullData
{
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: SubscriptionFullData['userId']

	@Attribute(DataTypes.ENUM(subscriptionType.options))
	@NotNull
	@Default('trial')
	declare type: CreationOptional<SubscriptionFullData['type']>

	@Attribute(DataTypes.DATE)
	@NotNull
	@Default(DataTypes.NOW)
	declare startDate: CreationOptional<SubscriptionFullData['startDate']>

	@Attribute(DataTypes.DATE)
	@NotNull
	@Default(DataTypes.NOW)
	declare endDate: CreationOptional<SubscriptionFullData['endDate']>

	@Attribute(DataTypes.ENUM(subscriptionStatus.options))
	@NotNull
	@Default('active')
	declare status: CreationOptional<SubscriptionFullData['status']>

	/** Defined by {@link UserModel.subscription} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): SubscriptionDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			type: this.type,
			startDate: this.startDate,
			endDate: this.endDate,
			status: this.status,
		}
	}

	async asFullData(): Promise<SubscriptionFullData> {
		const dto = this.asDto()
		const user = await this.getUser()
		const userDto = await user!.asFullData()

		return {
			...dto,
			user: userDto,
		}
	}
}
