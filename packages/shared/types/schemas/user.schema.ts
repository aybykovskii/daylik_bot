import { z } from 'zod'

import { Pretty } from '../common'

import { EventDraftDto } from './event-draft.schema'
import { EventSharingDto } from './event-sharing.schema'
import { EventDto } from './event.schema'
import { FriendshipRequestDto } from './friendship-request.schema'
import { PaymentDto } from './payment.schema'
import { ModelIntBase } from './postgre'
import { RewardDto } from './reward.schema'
import { RoleDto } from './role.schema'
import { SettingsDto } from './settings.schema'
import { StatisticsBase } from './statistics.schema'
import { SubscriptionDto } from './subscription.schema'

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
