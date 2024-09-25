import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
	sql,
} from '@sequelize/core'
import { Attribute, Default, NotNull, Table, Unique } from '@sequelize/core/decorators-legacy'

import { Payment, paymentStatus } from 'shared/types'

import { BaseModel } from './baseModel'
import { UserModel } from './user'

@Table({ tableName: 'payments' })
export class PaymentModel extends BaseModel<PaymentModel> implements Payment {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: Payment['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	@Unique
	@Default(sql.uuidV4)
	declare paymentId: CreationOptional<Payment['paymentId']>

	@Attribute(DataTypes.STRING)
	@NotNull
	@Unique
	@Default(sql.uuidV4)
	declare idempotenceKey: CreationOptional<Payment['idempotenceKey']>

	@Attribute(DataTypes.INTEGER)
	declare amount: Payment['amount']

	@Attribute(DataTypes.ENUM(paymentStatus.Values))
	@Default(paymentStatus.Values.pending)
	declare status: CreationOptional<Payment['status']>

	@Attribute(DataTypes.STRING)
	@NotNull
	@Default('RUB')
	declare currency: Payment['currency']

	@Attribute(DataTypes.STRING)
	@NotNull
	declare description: Payment['description']

	/** Defined by {@link UserModel.payments} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asPaymentInfo(): Payment {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			userId: this.userId,
			paymentId: this.paymentId,
			idempotenceKey: this.idempotenceKey,
			amount: this.amount,
			status: this.status,
			currency: this.currency,
			description: this.description,
		}
	}
}
