import { ModelId, Payment } from '~types'

import { coreApi } from './core'

export const makePaymentsApi = () => {
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
