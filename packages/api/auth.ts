import { Env, TelegramUserId } from 'shared/types'

import { makeCoreApi } from './core'

export const makeAuthApi = (env?: Env) => {
	const usersApi = makeCoreApi(env, '/auth')

	return {
		login: async (telegramUserId: TelegramUserId) =>
			await usersApi.post<string>(`${telegramUserId}`, { json: {} }),
	}
}
