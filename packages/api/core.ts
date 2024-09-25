import ky, { HTTPError, Input, Options, ResponsePromise } from 'ky'

import { Env, ErrorResponse } from 'shared/types'

class AuthData {
	static token = ''

	public static setToken = (token: string) => {
		this.token = token
	}

	public static getToken = () => this.token
}

class ApiClient {
	private options: Options

	private client: typeof ky

	constructor(options: Options) {
		const resultOptions: Options = {
			...options,
			hooks: {
				beforeRequest: [
					(req) => {
						console.log('called before request', { req, token: AuthData.getToken() })

						return req.headers.set('Authorization', AuthData.getToken())
					},
				],
			},
		}

		this.client = ky.create(resultOptions)
		this.options = resultOptions
	}

	extend = (options: Options) =>
		new ApiClient({
			...this.options,
			...options,
			prefixUrl: `${this.options.prefixUrl}${options.prefixUrl}`,
		})

	private safeCall = async <T>(request: ResponsePromise): Promise<T> => {
		try {
			const result = await request

			const token = result.headers.get('Authorization')

			if (token && !AuthData.getToken()) {
				AuthData.setToken(token)
			}

			return result.json<T>()
		} catch (e) {
			const { response, request } = e as HTTPError

			if (response) {
				const { error } = await response.json<ErrorResponse>()

				console.info(`Request ${request.method} ${request.url} failed:\n ${error}`)
			}

			throw e
		}
	}

	get = async <T>(url: Input, options?: Options) =>
		this.safeCall<T>(this.client.get(url, options ?? this.options ?? {}))

	post = async <T>(url: Input, options?: Options) =>
		this.safeCall<T>(this.client.post(url, options ?? this.options))

	patch = async <T>(url: Input, options?: Options) =>
		this.safeCall<T>(this.client.patch(url, options ?? this.options))

	delete = async <T>(url: Input, options?: Options) =>
		this.safeCall<T>(this.client.delete(url, options ?? this.options))
}

export const makeCoreApi = (envClass?: Env, prefix = '/api') => {
	const env: Env = envClass ?? (process.env as Env)

	return new ApiClient({
		prefixUrl: env.VITE_ENV ? prefix : `${env.DOMAIN}:${env.SERVER_PORT}${prefix}`,
		headers: {
			[env.AUTHENTICATE_HEADER_KEY as string]: env.AUTHENTICATE_HEADER_VALUE,
		},
	})
}
