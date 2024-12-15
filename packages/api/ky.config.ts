import ky from 'ky'

import { commonLogger } from 'shared/logger'
import { Api } from './api.generated'

class AuthData {
	static token = ''

	public static setToken = (token: string) => {
		this.token = token
	}

	public static getToken = () => this.token
}

export const api = new Api({
	customFetch(input, init) {
		return ky(input, {
			...init,
			throwHttpErrors: false,
			hooks: {
				beforeRequest: [
					(req) => {
						return req.headers.set('Authorization', AuthData.getToken())
					},
				],
				afterResponse: [
					async (_, options, res) => {
						const { method } = options
						const { url, status } = res

						if (status >= 400) {
							const { message } = (await res.json()) as { message: string }

							commonLogger.error(`Request to ${method} ${url} failed with status ${status}: ${message}`)
						}

						const token = res.headers.get('Authorization')

						if (token && !AuthData.getToken()) {
							AuthData.setToken(token)
						}

						return res
					},
				],
			},
		})
	},
}) as Omit<Api<unknown>, 'abortRequest' | 'request' | 'setSecurityData'>
