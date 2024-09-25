import { CreateEventArg, Env, Event, ModelId, MyOmit } from 'shared/types'

import { makeCoreApi } from './core'

export const makeEventDraftsApi = (env?: Env) => {
	const eventDraftsApi = makeCoreApi(env).extend({ prefixUrl: '/eventDrafts' })

	return {
		getAll: async () => eventDraftsApi.get<Event[]>(''),

		create: async (event: MyOmit<CreateEventArg, 'weekDayNumber' | 'monthDayNumber'>) =>
			eventDraftsApi.post<Event>('', { json: event }),

		get: async (id: ModelId) => eventDraftsApi.get<Event | null>(`${id}`),

		delete: async (id: ModelId) => eventDraftsApi.delete<void>(`${id}`),
	}
}
