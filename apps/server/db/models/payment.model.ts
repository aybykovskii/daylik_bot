import {
	BelongsToGetAssociationMixin,
	CreationOptional,
	DataTypes,
	NonAttribute,
	sql,
} from '@sequelize/core'
import { Attribute, Default, NotNull, Table, Unique } from '@sequelize/core/decorators-legacy'

import { PaymentDto, PaymentFullData, paymentStatus } from 'shared/types'

import { BaseUuidModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'payments', modelName: 'Payment' })
export class PaymentModel extends BaseUuidModel<PaymentModel> implements PaymentFullData {
	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare userId: PaymentFullData['userId']

	@Attribute(DataTypes.STRING)
	@NotNull
	@Unique
	@Default(sql.uuidV4)
	declare paymentId: CreationOptional<PaymentFullData['paymentId']>

	@Attribute(DataTypes.STRING)
	@NotNull
	@Unique
	@Default(sql.uuidV4)
	declare idempotenceKey: CreationOptional<PaymentFullData['idempotenceKey']>

	@Attribute(DataTypes.INTEGER)
	declare amount: PaymentFullData['amount']

	@Attribute(DataTypes.ENUM(paymentStatus.options))
	@Default(paymentStatus.Values.pending)
	declare status: CreationOptional<PaymentFullData['status']>

	@Attribute(DataTypes.STRING)
	@NotNull
	@Default('RUB')
	declare currency: CreationOptional<PaymentFullData['currency']>

	@Attribute(DataTypes.STRING)
	@NotNull
	declare description: PaymentFullData['description']

	/** Defined by {@link UserModel} */
	declare user: NonAttribute<UserModel>
	declare getUser: BelongsToGetAssociationMixin<UserModel>

	asDto(): PaymentDto {
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

	asFullData(): PaymentFullData {
		const dto = this.asDto()

		return {
			...dto,
			user: this.user,
		}
	}
}
