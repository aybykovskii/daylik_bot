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
import { Attribute, BelongsToMany, Default, HasMany, HasOne, NotNull, Table } from '@sequelize/core/decorators-legacy'

import { typeToArray } from '@/common/validation'
import { UserDto, UserFullData, userRole } from '@/types/users'

import { BaseIntModel } from './base.model'
import { EventDraftModel } from './event-draft.model'
import { EventSharingModel } from './event-sharing.model'
import { EventModel } from './event.model'
import { FriendshipRequestModel } from './friendship-request.model'
import { PaymentModel } from './payment.model'
import { RewardModel } from './reward.model'
import { SettingsModel } from './settings.model'
import { StatisticsModel } from './statistics.model'
import { SubscriptionModel } from './subscription.model'

@Table({ tableName: 'users', modelName: 'User' })
export class UserModel extends BaseIntModel<UserModel> {
  @Attribute(DataTypes.STRING)
  @NotNull
  declare telegramUserId: UserDto['telegramUserId']

  @Attribute(DataTypes.STRING)
  declare firstName: UserDto['firstName']

  @Attribute(DataTypes.STRING)
  declare lastName: UserDto['lastName']

  @Attribute(DataTypes.ENUM(typeToArray(userRole)))
  @Default('user' satisfies UserDto['role'])
  declare role: UserDto['role']

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
      ...this.getBaseDto(),
      telegramUserId: this.telegramUserId,
      firstName: this.firstName ?? '',
      lastName: this.lastName ?? '',
      fullName: this.fullName,
      role: this.role,
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

    const rewards = await this.getRewards()
    const rewardsDto = await rewards.map((reward) => reward.asDto())

    const events = await this.getEvents()
    const eventsDto = await events.map((event) => event.asDto())

    const eventDrafts = await this.getEventDrafts()
    const eventDraftsDto = await eventDrafts.map((eventDraft) => eventDraft.asDto())

    const payments = await this.getPayments()
    const paymentsDto = await payments.map((payment) => payment.asDto())

    const outgoingFriendshipRequests = await this.getOutgoingFriendshipRequests()
    const outgoingFriendshipRequestsDto = await outgoingFriendshipRequests.map((request) => request.asDto())

    const incomingFriendshipRequests = await this.getIncomingFriendshipRequests()
    const incomingFriendshipRequestsDto = await incomingFriendshipRequests.map((request) => request.asDto())

    const friends = await this.getFriends()
    const friendsDto = await friends.map((friend) => friend.asDto())

    const outgoingEventShares = await this.getOutgoingEventShares()
    const outgoingEventSharesDto = await outgoingEventShares.map((share) => share.asDto())

    const incomingEventShares = await this.getIncomingEventShares()
    const incomingEventSharesDto = await incomingEventShares.map((share) => share.asDto())

    return {
      ...dto,
      settings: settingsDto,
      subscription: subscriptionDto,
      statistics: statisticsDto,
      rewards: rewardsDto,
      events: eventsDto,
      eventDrafts: eventDraftsDto,
      payments: paymentsDto,
      outgoingFriendshipRequests: outgoingFriendshipRequestsDto,
      incomingFriendshipRequests: incomingFriendshipRequestsDto,
      friends: friendsDto,
      outgoingEventShares: outgoingEventSharesDto,
      incomingEventShares: incomingEventSharesDto,
    }
  }
}
