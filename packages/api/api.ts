import { Env } from 'shared/types'

import { makeAuthApi } from './auth'
import { makeEventDraftsApi } from './eventDrafts'
import { makeEventsApi } from './events'
import { makePaymentsApi } from './payments'
import { makeUsersApi } from './users'

export const makeApi = (env?: Env) => ({
	auth: makeAuthApi(env),
	users: makeUsersApi(env),
	payments: makePaymentsApi(env),
	events: makeEventsApi(env),
	eventDrafts: makeEventDraftsApi(env),
})

export type Api = ReturnType<typeof makeApi>
