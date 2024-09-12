import { ModelId, Payment } from '~types'

import { makeCoreApi } from './core'

export const makePaymentsApi = () => {
	const coreApi = makeCoreApi()
	const paymentsApi = coreApi.extend({ prefixUrl: '/payments' })

	return {
		getAll: async () => await paymentsApi.get<Payment[]>('', []),

		get: async (id: ModelId) => await paymentsApi.get<Payment | null>(`${id}`, null),

		paymentSuccess: async (id: ModelId) =>
			await paymentsApi.post<Payment>(`${id}/success`, {} as Payment),

		paymentFailed: async (id: ModelId) =>
			await paymentsApi.post<Payment>(`${id}/failed`, {} as Payment),
	}
}
