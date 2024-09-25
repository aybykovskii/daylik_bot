import {
	DataTypes,
	HasManyAddAssociationMixin,
	HasManyGetAssociationsMixin,
	HasOneGetAssociationMixin,
	NonAttribute,
} from '@sequelize/core'
import {
	Attribute,
	BelongsToMany,
	HasMany,
	HasOne,
	NotNull,
	Table,
} from '@sequelize/core/decorators-legacy'

import { User } from 'shared/types'

import { BaseModel } from './baseModel'
import { EventModel } from './event'
import { EventDraftModel } from './eventDraft'
import { PaymentModel } from './payment'
import { RoleModel } from './role'
import { SettingsModel } from './settings'
import { StatisticsModel } from './statistics'
import { SubscriptionModel } from './subscription'

@Table({ tableName: 'users', modelName: 'User' })
export class UserModel extends BaseModel<UserModel> implements User {
	@Attribute(DataTypes.STRING)
	@NotNull
	declare telegramUserId: User['telegramUserId']

	@Attribute(DataTypes.STRING)
	declare firstName: User['firstName']

	@Attribute(DataTypes.STRING)
	declare lastName: User['lastName']

	@BelongsToMany(() => RoleModel, {
		through: 'userRoles',
	})
	declare roles: NonAttribute<RoleModel[]>
	declare getRoles: HasManyGetAssociationsMixin<RoleModel>
	declare addRole: HasManyAddAssociationMixin<RoleModel, RoleModel['id']>

	@HasOne(() => SettingsModel, {
		foreignKey: 'id',
		inverse: {
			as: 'user',
		},
	})
	declare settings: NonAttribute<SettingsModel>
	declare getSettings: HasOneGetAssociationMixin<SettingsModel>

	@HasOne(() => SubscriptionModel, {
		foreignKey: 'id',
		inverse: {
			as: 'user',
		},
	})
	declare subscription: NonAttribute<SubscriptionModel>
	declare getSubscription: HasOneGetAssociationMixin<SubscriptionModel>

	@HasOne(() => StatisticsModel, {
		foreignKey: 'id',
		inverse: {
			as: 'user',
		},
	})
	declare statistics: NonAttribute<StatisticsModel>
	declare getStatistics: HasOneGetAssociationMixin<StatisticsModel>

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
			fullName: this.fullName,
			roles: this.roles,
			settings: this.settings,
			subscription: this.subscription,
			statistics: this.statistics,
			events: this.events,
			eventDraft: this.eventDraft,
			payments: this.payments,
			currentPayment: this.getCurrentPayment(),
		}
	}
}
