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
} from 'types/subscriptions'

import { typeToArray } from '@common/validation'
import { BaseIntModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'subscriptions', modelName: 'Subscription' })
export class SubscriptionModel extends BaseIntModel<SubscriptionModel> {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: SubscriptionDto['userId']

	@Attribute(DataTypes.ENUM(typeToArray(subscriptionType)))
	@NotNull
	@Default('trial' satisfies SubscriptionDto['type'])
	declare type: CreationOptional<SubscriptionDto['type']>

	@Attribute(DataTypes.DATE)
	@NotNull
	@Default(DataTypes.NOW)
	declare startDate: CreationOptional<Date>

	@Attribute(DataTypes.DATE)
	@NotNull
	@Default(DataTypes.NOW)
	declare endDate: CreationOptional<Date>

	@Attribute(DataTypes.ENUM(typeToArray(subscriptionStatus)))
	@NotNull
	@Default('active' satisfies SubscriptionDto['status'])
	declare status: CreationOptional<SubscriptionDto['status']>

	/** Defined by {@link UserModel.subscription} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): SubscriptionDto {
		return {
			...this.getBaseDto(),
			userId: this.userId,
			type: this.type,
			status: this.status,
			startDate: this.startDate.toISOString(),
			endDate: this.endDate.toISOString(),
		}
	}

	async asFullData(): Promise<SubscriptionFullData> {
		const dto = this.asDto()
		const user = await this.getUser()
		const userDto = await user!.asDto()

		return {
			...dto,
			user: userDto,
		}
	}
}
