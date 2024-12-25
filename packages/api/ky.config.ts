import ky from 'ky'

import { Api, RequestParams } from './api.generated'

class AuthData {
	static token = ''

	public static setToken = (token: string) => {
		this.token = token
	}

	public static getToken = () => this.token
}

const customFetch = (input: RequestInfo | URL, init?: RequestInit) =>
	ky(input, {
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

						console.error(`Request to ${method} ${url} failed with status ${status}: ${message}`)
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

type CustomApi = Omit<Api<unknown>, 'abortRequest' | 'request' | 'setSecurityData'>
export const api = new Api({ customFetch }) as CustomApi

type ApiParams = Omit<RequestParams, 'baseUrl' | 'signal' | 'cancelToken'>
export const createApi = (params: ApiParams) =>
	new Api({ customFetch, baseApiParams: params }) as CustomApi
