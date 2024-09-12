import {
	CreationOptional,
	DataTypes,
	HasManyAddAssociationMixin,
	HasManyGetAssociationsMixin,
	HasOneGetAssociationMixin,
	NonAttribute,
} from '@sequelize/core'
import {
	Attribute,
	Default,
	HasMany,
	HasOne,
	NotNull,
	Table,
} from '@sequelize/core/decorators-legacy'

import { User, userAccess } from '~types/user'
import { BaseModel } from './baseModel'
import { EventModel } from './event'
import { EventDraftModel } from './eventDraft'
import { PaymentModel } from './payment'

@Table({ tableName: 'users', modelName: 'User' })
export class UserModel extends BaseModel<UserModel> implements User {
	@Attribute(DataTypes.STRING)
	@NotNull
	declare telegramUserId: User['telegramUserId']

	@Attribute(DataTypes.STRING)
	declare firstName: User['firstName']

	@Attribute(DataTypes.STRING)
	declare lastName: User['lastName']

	@Attribute(DataTypes.JSONB)
	declare customization: User['customization']

	@Attribute(DataTypes.INTEGER)
	@NotNull
	@Default(0)
	declare requestsSent: CreationOptional<User['requestsSent']>

	@Attribute(DataTypes.STRING)
	@NotNull
	@Default(userAccess.Values.trial)
	declare access: User['access']

	@HasMany(() => PaymentModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare payments: NonAttribute<PaymentModel[]>
	declare getPayments: HasManyGetAssociationsMixin<PaymentModel>
	declare addPayment: HasManyAddAssociationMixin<PaymentModel, PaymentModel['id']>

	@HasMany(() => EventModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare events: NonAttribute<EventModel[]>
	declare getEvents: HasManyGetAssociationsMixin<EventModel>

	@HasOne(() => EventDraftModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare eventDraft: NonAttribute<EventDraftModel | null>
	declare getEventDraft: HasOneGetAssociationMixin<EventDraftModel>

	@Attribute(DataTypes.VIRTUAL(DataTypes.STRING, ['firstName', 'lastName']))
	get fullName(): NonAttribute<string> {
		return [this.firstName, this.lastName].filter(Boolean).join(' ') || ''
	}

	@Attribute(DataTypes.VIRTUAL(DataTypes.BOOLEAN, ['requestsSent', 'access']))
	get isLimitExceeded(): NonAttribute<boolean> {
		return this.access === 'trial' && this.requestsSent >= 10
	}

	async getCurrentPayment(): Promise<PaymentModel | null> {
		const payments = await this.getPayments()
		return payments.find((payment) => payment.status === 'pending') || null
	}

	asUserInfo() {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			telegramUserId: this.telegramUserId,
			firstName: this.firstName,
			lastName: this.lastName,
			customization: this.customization,
			requestsSent: this.requestsSent,
			access: this.access,
			fullName: this.fullName,
			isLimitExceeded: this.isLimitExceeded,
		}
	}
}
