import {
	CreateUserArg,
	ModelId,
	TelegramUserId,
	User,
	UserCustomization,
	UserFullData,
} from '~types'

import { coreApi } from './core'

export const makeUsersApi = () => {
	const usersApi = coreApi.extend({ prefixUrl: `/users` })

	return {
		getAll: async () => await usersApi.get<User[]>('', []),

		create: async (user: CreateUserArg) =>
			await usersApi.post<UserFullData>('', {} as UserFullData, { json: user }),

		get: async (id: ModelId | TelegramUserId) =>
			await usersApi.get<UserFullData | null>(`${id}`, null),

		setCustomization: async (id: ModelId, customization: UserCustomization) =>
			await usersApi.patch<UserCustomization>(`${id}/customization`, customization, {}),

		increaseSentRequest: async (id: ModelId) =>
			await usersApi.post<number>(`${id}/increaseSentRequest`, 0),

		addLicense: async (id: ModelId) => await usersApi.post<void>(`${id}/license`, undefined),
	}
}
