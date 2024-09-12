import { MyOmit } from '../common'
import { UserBase, UserFullData } from './user'

export type CreateUserArg = MyOmit<UserBase, 'requestsSent' | 'access'>
export type CreateUserResponse = MyOmit<
	UserFullData,
	'events' | 'eventDraft' | 'payments' | 'currentPayment'
>
