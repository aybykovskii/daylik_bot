import {
	CreateUserArg,
	CreateUserResponse,
	ModelId,
	TelegramUserId,
	User,
	UserFullData,
} from '~types'

import { usersApi } from './core'

export const users = {
	getAll: async () => await usersApi.get<User[]>('', []),

	create: async (user: CreateUserArg) =>
		await usersApi.post<CreateUserResponse>('', {} as CreateUserResponse, { json: user }),

	get: async (id: ModelId | TelegramUserId) =>
		await usersApi.get<UserFullData | null>(`${id}`, null),

	increaseSentRequest: async (id: ModelId) =>
		await usersApi.post<number>(`${id}/increaseSentRequest`, 0),

	addLicense: async (id: ModelId) => await usersApi.post<void>(`${id}/license`, undefined),
}
