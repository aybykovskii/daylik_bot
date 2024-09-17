import { makeEventDraftsApi } from './eventDrafts'
import { makeEventsApi } from './events'
import { makePaymentsApi } from './payments'
import { makeUsersApi } from './users'

export const makeApi = () => ({
	users: makeUsersApi(),
	payments: makePaymentsApi(),
	events: makeEventsApi(),
	eventDrafts: makeEventDraftsApi(),
})

export type Api = ReturnType<typeof makeApi>
