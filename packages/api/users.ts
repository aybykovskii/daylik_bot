import {
	CreateUserArg,
	Env,
	ModelId,
	TelegramUserId,
	User,
	UserCustomization,
	UserFullData,
} from 'shared/types'

import { makeCoreApi } from './core'

export const makeUsersApi = (env?: Env) => {
	const usersApi = makeCoreApi(env).extend({ prefixUrl: `/users` })

	return {
		getAll: async () => await usersApi.get<User[]>(''),

		create: async (user: CreateUserArg) => await usersApi.post<UserFullData>('', { json: user }),

		get: async (id: ModelId | TelegramUserId) => await usersApi.get<UserFullData | null>(`${id}`),

		setCustomization: async (id: ModelId, customization: UserCustomization) =>
			await usersApi.patch<UserCustomization>(`${id}/customization`, { json: customization }),

		increaseSentRequest: async (id: ModelId) =>
			await usersApi.post<number>(`${id}/increaseSentRequest`),

		addLicense: async (id: ModelId) => await usersApi.post<void>(`${id}/license`),
	}
}
