import {
	BelongsToManyAddAssociationMixin,
	BelongsToManyGetAssociationsMixin,
	BelongsToManyRemoveAssociationMixin,
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

import { UserDto, UserFullData } from 'shared/types/schemas/user.schema'
import { BaseIntModel } from './base.model'
import { EventDraftModel } from './event-draft.model'
import { EventSharingModel } from './event-sharing.model'
import { EventModel } from './event.model'
import { FriendshipRequestModel } from './friendship-request.model'
import { PaymentModel } from './payment.model'
import { RewardModel } from './reward.model'
import { RoleModel } from './role.model'
import { SettingsModel } from './settings.model'
import { StatisticsModel } from './statistics.model'
import { SubscriptionModel } from './subscription.model'

@Table({ tableName: 'users', modelName: 'User' })
export class UserModel extends BaseIntModel<UserModel> implements UserFullData {
	@Attribute(DataTypes.STRING)
	@NotNull
	declare telegramUserId: UserDto['telegramUserId']

	@Attribute(DataTypes.STRING)
	declare firstName: UserDto['firstName']

	@Attribute(DataTypes.STRING)
	declare lastName: UserDto['lastName']

	@BelongsToMany(() => RoleModel, {
		through: 'userRoles',
	})
	declare roles: NonAttribute<RoleModel[]>
	declare getRoles: BelongsToManyGetAssociationsMixin<RoleModel>
	declare addRole: BelongsToManyAddAssociationMixin<RoleModel, RoleModel['id']>

	@BelongsToMany(() => RewardModel, {
		through: 'userRewards',
	})
	declare rewards: NonAttribute<RewardModel[]>
	declare getRewards: BelongsToManyGetAssociationsMixin<RewardModel>
	declare addReward: BelongsToManyAddAssociationMixin<RewardModel, RewardModel['id']>

	@BelongsToMany(() => UserModel, {
		through: 'userFriends',
		foreignKey: 'userId',
		otherKey: 'friendId',
		inverse: {
			as: 'friendOf',
		},
	})
	declare friends: NonAttribute<UserModel[]>
	declare getFriends: BelongsToManyGetAssociationsMixin<UserModel>
	declare addFriend: BelongsToManyAddAssociationMixin<UserModel, UserModel['id']>
	declare removeFriend: BelongsToManyRemoveAssociationMixin<UserModel, UserModel['id']>

	@BelongsToMany(() => UserModel, {
		through: 'userFriends',
		foreignKey: 'friendId',
		otherKey: 'userId',
		inverse: {
			as: 'friends',
		},
	})
	declare friendOf: NonAttribute<UserModel[]>
	declare getFriendOf: BelongsToManyGetAssociationsMixin<UserModel>
	declare addFriendOf: BelongsToManyAddAssociationMixin<UserModel, number>

	@HasOne(() => SettingsModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare settings: NonAttribute<SettingsModel>
	declare getSettings: HasOneGetAssociationMixin<SettingsModel>

	@HasOne(() => SubscriptionModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare subscription: NonAttribute<SubscriptionModel>
	declare getSubscription: HasOneGetAssociationMixin<SubscriptionModel>

	@HasOne(() => StatisticsModel, {
		foreignKey: 'userId',
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

	@HasMany(() => EventDraftModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare eventDrafts: NonAttribute<EventDraftModel[]>
	declare getEventDrafts: HasManyGetAssociationsMixin<EventDraftModel>

	@HasMany(() => FriendshipRequestModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare outgoingFriendshipRequests: NonAttribute<FriendshipRequestModel[]>
	declare getOutgoingFriendshipRequests: HasManyGetAssociationsMixin<FriendshipRequestModel>

	@HasMany(() => FriendshipRequestModel, {
		foreignKey: 'targetUserId',
		inverse: {
			as: 'targetUser',
		},
	})
	declare incomingFriendshipRequests: NonAttribute<FriendshipRequestModel[]>
	declare getIncomingFriendshipRequests: HasManyGetAssociationsMixin<FriendshipRequestModel>

	@HasMany(() => EventSharingModel, {
		foreignKey: 'userId',
		inverse: {
			as: 'user',
		},
	})
	declare outgoingEventShares: NonAttribute<EventSharingModel[]>
	declare getOutgoingEventShares: HasManyGetAssociationsMixin<EventSharingModel>

	@HasMany(() => EventSharingModel, {
		foreignKey: 'targetUserId',
		inverse: {
			as: 'targetUser',
		},
	})
	declare incomingEventShares: NonAttribute<EventSharingModel[]>
	declare getIncomingEventShares: HasManyGetAssociationsMixin<EventSharingModel>

	@Attribute(DataTypes.VIRTUAL(DataTypes.STRING, ['firstName', 'lastName']))
	get fullName(): NonAttribute<string> {
		return [this.firstName, this.lastName].filter(Boolean).join(' ') || ''
	}

	async getCurrentPayment(): Promise<PaymentModel | null> {
		const payments = await this.getPayments()
		return payments.find((payment) => payment.status === 'pending') || null
	}

	asDto(): UserDto {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			telegramUserId: this.telegramUserId,
			firstName: this.firstName,
			lastName: this.lastName ?? '',
		}
	}

	async asFullData(): Promise<UserFullData> {
		const dto = this.asDto()

		const statistics = await this.getStatistics()
		const statisticsDto = await statistics!.asDto()
		const settings = await this.getSettings()
		const settingsDto = await settings!.asDto()
		const subscription = await this.getSubscription()
		const subscriptionDto = await subscription!.asDto()

		return {
			...dto,
			fullName: this.fullName,
			settings: settingsDto,
			subscription: subscriptionDto,
			statistics: statisticsDto,
			roles: await this.getRoles(),
			rewards: await this.getRewards(),
			events: await this.getEvents(),
			eventDrafts: await this.getEventDrafts(),
			payments: await this.getPayments(),
			outgoingFriendshipRequests: await this.getOutgoingFriendshipRequests(),
			incomingFriendshipRequests: await this.getIncomingFriendshipRequests(),
			friends: await this.getFriends(),
			outgoingEventShares: await this.getOutgoingEventShares(),
			incomingEventShares: await this.getIncomingEventShares(),
		}
	}
}
