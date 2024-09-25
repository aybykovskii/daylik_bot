import { Env, ModelId, Payment } from 'shared/types'

import { makeCoreApi } from './core'

export const makePaymentsApi = (env?: Env) => {
	const paymentsApi = makeCoreApi(env).extend({ prefixUrl: '/payments' })

	return {
		getAll: async () => await paymentsApi.get<Payment[]>(''),

		get: async (id: ModelId) => await paymentsApi.get<Payment | null>(`${id}`),

		paymentSuccess: async (id: ModelId) => await paymentsApi.post<Payment>(`${id}/success`),

		paymentFailed: async (id: ModelId) => await paymentsApi.post<Payment>(`${id}/failed`),
	}
}
