import { type } from 'arktype'

import { eventDraftDto } from '@/types/event-drafts'
import { eventSharingDto } from '@/types/event-shares'
import { eventDto } from '@/types/events'
import { friendshipRequestDto } from '@/types/friendship-requests'
import { paymentDto } from '@/types/payments'
import { rewardDto } from '@/types/rewards'
import { settingsDto } from '@/types/settings'
import { statisticsDto } from '@/types/statistics'
import { subscriptionDto } from '@/types/subscriptions'
import { user, userDto } from '@/types/users'

export const UsersError = {
  DoesNotExist: type('"ERR_USER_DOES_NOT_EXIST"'),
  AlreadyExists: type('"ERR_USER_ALREADY_EXISTS"'),
  UpdateFailed: type('"ERR_USER_UPDATE_FAILED"'),
}

export const createUserDto = user.omit('role', 'fullName')
export type CreateUserDto = typeof createUserDto.infer

export const updateUserDto = user.omit('fullName', 'telegramUserId').partial()
export type UpdateUserDto = typeof updateUserDto.infer

export const userFullData = userDto.merge({
  settings: settingsDto,
  subscription: subscriptionDto,
  statistics: statisticsDto,
  rewards: rewardDto.array(),
  events: eventDto.array(),
  eventDrafts: eventDraftDto.array(),
  payments: paymentDto.array(),
  outgoingFriendshipRequests: friendshipRequestDto.array(),
  incomingFriendshipRequests: friendshipRequestDto.array(),
  friends: userDto.array(),
  outgoingEventShares: eventSharingDto.array(),
  incomingEventShares: eventSharingDto.array(),
})
