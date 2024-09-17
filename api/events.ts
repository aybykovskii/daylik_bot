import { CreateEventArg, Event, ModelId, UpdateEventArg } from '~types'

import { coreApi } from './core'

export const makeEventsApi = () => {
	const eventsApi = coreApi.extend({ prefixUrl: '/events' })

	return {
		getAll: async () => eventsApi.get<Event[]>('', []),

		create: async (event: CreateEventArg) => eventsApi.post<Event>('', {} as Event, { json: event }),

		update: async (id: ModelId, event: UpdateEventArg) =>
			eventsApi.patch<Event>(`${id}`, {} as Event, { json: event }),

		get: async (id: ModelId) => eventsApi.get<Event | null>(`${id}`, null),

		delete: async (id: ModelId) => eventsApi.delete<void>(`${id}`, undefined),
	}
}
