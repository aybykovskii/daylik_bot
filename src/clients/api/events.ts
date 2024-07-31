import { CreateEventArg, ModelId } from '~types'

import { eventsApi } from './core'

export const events = {
	getAll: async () => eventsApi.get<Event[]>('', []),

	create: async (event: CreateEventArg) => eventsApi.post<Event>('', {} as Event, { json: event }),

	get: async (id: ModelId) => eventsApi.get<Event | null>(`${id}`, null),

	delete: async (id: ModelId) => eventsApi.delete<void>(`${id}`, undefined),
}
