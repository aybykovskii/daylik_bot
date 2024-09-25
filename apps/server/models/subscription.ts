import { BelongsToGetAssociationMixin, DataTypes, NonAttribute } from '@sequelize/core'
import { Attribute, Default, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { Subscription } from 'shared/types'

import { BaseModel } from './baseModel'
import { UserModel } from './user'

@Table({ tableName: 'subscriptions', modelName: 'Subscription' })
export class SubscriptionModel extends BaseModel<SubscriptionModel> implements Subscription {
	@Attribute(DataTypes.ENUM(['trial', 'paid']))
	@NotNull
	@Default('trial')
	declare type: Subscription['type']

	@Attribute(DataTypes.DATE)
	@NotNull
	declare startDate: Subscription['startDate']

	@Attribute(DataTypes.DATE)
	@NotNull
	declare endDate: Subscription['endDate']

	@Attribute(DataTypes.ENUM(['active', 'expired', 'canceled']))
	@NotNull
	@Default('active')
	declare status: Subscription['status']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare freeOperationsLeft: Subscription['freeOperationsLeft']

	/** Defined by {@link UserModel.events} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>
}
