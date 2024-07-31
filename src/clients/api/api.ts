import { eventDrafts } from './eventDrafts'
import { events } from './events'
import { payments } from './payments'
import { users } from './users'

export const api = {
	users,
	payments,
	events,
	eventDrafts,
}

export type Api = typeof api
