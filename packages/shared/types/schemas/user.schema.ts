import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { EventDraftDto, eventDraftsResponseDto } from './event-draft.schema'
import { EventSharingDto, eventSharesResponseDto } from './event-sharing.schema'
import { EventDto, eventsResponseDto } from './event.schema'
import { FriendshipRequestDto, friendshipRequestsResponseDto } from './friendship-request.schema'
import { PaymentDto, paymentsResponseDto } from './payment.schema'
import { ModelIntBase } from './postgre'
import { RewardDto, rewardsResponseDto } from './reward.schema'
import { RoleDto, rolesResponseDto } from './role.schema'
import { SettingsDto, settingsResponseDto } from './settings.schema'
import { StatisticsBase, statisticsResponseDto } from './statistics.schema'
import { SubscriptionDto, subscriptionResponseDto } from './subscription.schema'

export const telegramUserId = z.coerce
	.string()
	.regex(/^-?\d*$/)
	.brand<'telegramUserId'>()
export type TelegramUserId = z.infer<typeof telegramUserId>

export const user = z.object({
	telegramUserId: telegramUserId,
	firstName: z.string().nullable().optional(),
	lastName: z.string().nullable().optional(),
})

export type UserBase = z.infer<typeof user>
export type UserDto = Pretty<ModelIntBase & UserBase>

export type UserFullData = UserDto & {
	fullName: string
	roles: RoleDto[]
	settings: SettingsDto
	statistics: StatisticsBase
	subscription: SubscriptionDto
	rewards: RewardDto[]
	events: EventDto[]
	eventDrafts: EventDraftDto[]
	payments: PaymentDto[]
	outgoingFriendshipRequests: FriendshipRequestDto[]
	incomingFriendshipRequests: FriendshipRequestDto[]
	friends: UserDto[]
	outgoingEventShares: EventSharingDto[]
	incomingEventShares: EventSharingDto[]
}

export const createUserDto = user
export type CreateUserDto = Pretty<z.infer<typeof createUserDto>>

export const updateUserDto = user.omit({ telegramUserId: true }).partial()
export type UpdateUserDto = Pretty<z.infer<typeof updateUserDto>>

export const userResponseDto = user.extend(withDbId.shape)
export type UserResponseDto = Pretty<z.infer<typeof userResponseDto>>

export const userFullDataResponseDto = user.extend({
	roles: rolesResponseDto,
	settings: settingsResponseDto,
	statistics: statisticsResponseDto,
	subscription: subscriptionResponseDto,
	rewards: rewardsResponseDto,
	events: eventsResponseDto,
	eventDrafts: eventDraftsResponseDto,
	payments: paymentsResponseDto,
	outgoingFriendshipRequests: friendshipRequestsResponseDto,
	incomingFriendshipRequests: friendshipRequestsResponseDto,
	friends: userResponseDto.array(),
	outgoingEventShares: eventSharesResponseDto,
	incomingEventShares: eventSharesResponseDto,
})
export type UserFullDataResponseDto = Pretty<z.infer<typeof userFullDataResponseDto>>

export const usersResponseDto = z.array(userResponseDto)
export type UsersResponseDto = Pretty<z.infer<typeof rewardsResponseDto>>
