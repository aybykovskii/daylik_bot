import { z } from 'zod'

import { PrettyZod } from '../common'
import { user } from '../schemas'

import { withDbId } from './base.dto'
import { eventDraftsResponseDto } from './event-draft.dto'
import { eventSharesResponseDto } from './event-sharing.dto'
import { eventsResponseDto } from './event.dto'
import { friendshipRequestsResponseDto } from './friendship-request.dto'
import { paymentsResponseDto } from './payment.dto'
import { rewardsResponseDto } from './reward.dto'
import { rolesResponseDto } from './role.dto'
import { settingsResponseDto } from './settings.dto'
import { statisticsResponseDto } from './statistics.dto'
import { subscriptionResponseDto } from './subscription.dto'

export const createUserDto = user
export type CreateUserDto = PrettyZod<typeof createUserDto>

export const updateUserDto = user.omit({ telegramUserId: true }).partial()
export type UpdateUserDto = PrettyZod<typeof updateUserDto>

export const userResponseDto = user.extend(withDbId.shape)
export type UserResponseDto = PrettyZod<typeof userResponseDto>

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
export type UserFullDataResponseDto = PrettyZod<typeof userFullDataResponseDto>

export const usersResponseDto = z.array(userResponseDto)
export type UsersResponseDto = PrettyZod<typeof rewardsResponseDto>
