import { CreateEventArg, Env, Event, ModelId, UpdateEventArg } from 'shared/types'

import { makeCoreApi } from './core'

export const makeEventsApi = (env?: Env) => {
	const eventsApi = makeCoreApi(env).extend({ prefixUrl: '/events' })

	return {
		getAll: async () => eventsApi.get<Event[]>(''),

		create: async (event: CreateEventArg) => eventsApi.post<Event>('', { json: event }),

		update: async (id: ModelId, event: UpdateEventArg) =>
			eventsApi.patch<Event>(`${id}`, { json: event }),

		get: async (id: ModelId) => eventsApi.get<Event | null>(`${id}`),

		delete: async (id: ModelId) => eventsApi.delete<void>(`${id}`),
	}
}
