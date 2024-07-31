import { CreateEventArg, Event, ModelId } from '~types'

import { eventDraftsApi } from './core'

export const eventDrafts = {
	getAll: async () => eventDraftsApi.get<Event[]>('', []),

	create: async (event: CreateEventArg) =>
		eventDraftsApi.post<Event>('', {} as Event, { json: event }),

	get: async (id: ModelId) => eventDraftsApi.get<Event | null>(`${id}`, null),

	delete: async (id: ModelId) => eventDraftsApi.delete<void>(`${id}`, undefined),
}
