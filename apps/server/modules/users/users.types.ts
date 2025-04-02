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

export const usersError = type(`
  'ERR_USER_DOES_NOT_EXIST'
  | 'ERR_USER_ALREADY_EXISTS'
  | 'ERR_USER_UPDATE_FAILED'
`)
export type UsersError = typeof usersError.infer

export const createUserDto = user.omit('role', 'fullName')
export type CreateUserDto = typeof createUserDto.infer

export const updateUserDto = user.omit('fullName', 'telegramUserId').partial()
export type UpdateUserDto = typeof updateUserDto.infer

export const userFullData = userDto.merge({
  settings: settingsDto,
  subscription: subscriptionDto,
  statistics: statisticsDto,
  rewards: rewardDto,
  events: eventDto,
  eventDrafts: eventDraftDto,
  payments: paymentDto,
  outgoingFriendshipRequests: friendshipRequestDto,
  incomingFriendshipRequests: friendshipRequestDto,
  friends: userDto,
  outgoingEventShares: eventSharingDto,
  incomingEventShares: eventSharingDto,
})
