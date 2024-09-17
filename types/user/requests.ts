import { UserBase } from './user'

export type CreateUserArg = Pick<UserBase, 'firstName' | 'lastName' | 'telegramUserId'>
