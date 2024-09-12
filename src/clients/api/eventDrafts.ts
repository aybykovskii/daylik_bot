import { CreateEventArg, Event, ModelId, MyOmit } from '~types'

import { makeCoreApi } from './core'

export const makeEventDraftsApi = () => {
	const coreApi = makeCoreApi()
	const eventDraftsApi = coreApi.extend({ prefixUrl: '/eventDrafts' })

	return {
		getAll: async () => eventDraftsApi.get<Event[]>('', []),

		create: async (event: MyOmit<CreateEventArg, 'weekDayNumber' | 'monthDayNumber'>) =>
			eventDraftsApi.post<Event>('', {} as Event, { json: event }),

		get: async (id: ModelId) => eventDraftsApi.get<Event | null>(`${id}`, null),

		delete: async (id: ModelId) => eventDraftsApi.delete<void>(`${id}`, undefined),
	}
}
