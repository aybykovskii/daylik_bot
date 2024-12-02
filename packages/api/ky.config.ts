import ky from 'ky'

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
			hooks: {
				beforeRequest: [
					(req) => {
						console.log('called before request', { req, token: AuthData.getToken() })

						return req.headers.set('Authorization', AuthData.getToken())
					},
				],
				afterResponse: [
					(_, __, res) => {
						const token = res.headers.get('Authorization')
						console.log('called after response', { token })

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
