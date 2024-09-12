import { z } from 'zod'

import { Pretty } from '../common'
import { Event } from '../event'
import { Payment } from '../payment'
import { ModelBase } from '../postgre'

export const telegramUserId = z.coerce
	.string()
	.regex(/^-?\d*$/)
	.brand<'telegramUserId'>()
export type TelegramUserId = z.infer<typeof telegramUserId>

export const userAccess = z.enum(['admin', 'license', 'trial'])
export type UserAccess = z.infer<typeof userAccess>

export const userCustomization = z
	.object({
		primaryColor: z.string(),
		secondaryColor: z.string(),
	})
	.partial()
export type UserCustomization = z.infer<typeof userCustomization>

export const userBase = z.object({
	telegramUserId: telegramUserId,
	firstName: z.string(),
	lastName: z.string().optional(),
	requestsSent: z.number(),
	access: userAccess,
	customization: userCustomization,
})

export type UserBase = z.infer<typeof userBase>
export type User = Pretty<ModelBase & UserBase>

export const userRequestResult = z.enum(['createEvent', 'info', 'deleteEvent', 'error'])
export type UserRequestResult = z.infer<typeof userRequestResult>

export type UserFullData = User & {
	fullName: string
	isLimitExceeded: boolean
	events: Event[]
	eventDraft: Event | null
	payments: Payment[]
	currentPayment: Payment | null
}
