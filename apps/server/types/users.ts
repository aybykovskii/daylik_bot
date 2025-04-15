import { type } from 'arktype'

import { modelIntId } from './db'
import { EventDraftDto } from './event-drafts'
import { EventSharingDto } from './event-shares'
import { EventDto } from './events'
import { FriendshipRequestDto } from './friendship-requests'
import { PaymentDto } from './payments'
import { RewardDto } from './rewards'
import { SettingsDto } from './settings'
import { StatisticsDto } from './statistics'
import { SubscriptionDto } from './subscriptions'

export const userRole = type("'user' | 'staff' | 'admin'")
export type UserRole = typeof userRole.infer
export type Role = UserRole | 'system'

export const user = type({
  telegramUserId: 'string',
  firstName: 'string | null',
  lastName: 'string | null',
  role: userRole,
  fullName: 'string',
})
export type User = typeof user.infer

export const userDto = user.merge(modelIntId)
export type UserDto = typeof userDto.infer

export type UserFullData = UserDto & {
  settings: SettingsDto
  statistics: StatisticsDto
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

export const getIsUserRoleValid = (currentRole: Role, expectedRole: UserRole) => {
  if (currentRole === 'system') return true

  switch (expectedRole) {
    case 'user':
      return true

    case 'staff':
      return currentRole !== 'user'

    case 'admin':
      return currentRole === 'admin'
  }
}
