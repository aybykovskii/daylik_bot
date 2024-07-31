import path from 'node:path'
import ky, { HTTPError, Input, Options } from 'ky'

import { Environment } from '~common/environment'
import { Log } from '~common/logger'
import { ErrorResponse, commonEnvSchema } from '~types'

const env = Environment.get(commonEnvSchema, [path.resolve(__dirname, '../../../.env')])

class ApiClient {
	private options: Options

	private client: typeof ky

	constructor(options: Options) {
		this.client = ky.create(options)
		this.options = options
	}

	extend = (options: Options) =>
		new ApiClient({
			...this.options,
			...options,
			prefixUrl: `${this.options.prefixUrl}${options.prefixUrl}`,
		})

	private errorMiddleware = async ({ request, response }: HTTPError) => {
		const { error } = await response.json<ErrorResponse>()

		Log.error(`Request ${request.method} ${request.url} failed:\n ${error}`)
	}

	private safeCall = async <T>(request: Promise<T>, defaultValue: NoInfer<T>): Promise<T> => {
		try {
			return await request
		} catch (e) {
			Log.error(`Request failed:\n ${e}`)
			this.errorMiddleware(e as HTTPError)
			return defaultValue
		}
	}

	get = async <T>(url: Input, defaultValue: T, options?: Options): Promise<T> =>
		this.safeCall(this.client.get(url, options).json<T>(), defaultValue)

	post = async <T>(url: Input, defaultValue: T, options?: Options): Promise<T> =>
		this.safeCall(this.client.post(url, options).json<T>(), defaultValue)

	delete = async <T>(url: Input, defaultValue: T, options?: Options): Promise<T> =>
		this.safeCall(this.client.delete(url, options).json<T>(), defaultValue)
}

const baseApi = new ApiClient({
	prefixUrl: `http://localhost:${env.SERVER_PORT}/api`,
	headers: {
		[env.BOT_AUTHENTICATE_HEADER_KEY]: env.BOT_AUTHENTICATE_HEADER_VALUE,
	},
})

export const usersApi = baseApi.extend({ prefixUrl: `/users` })
export const paymentsApi = baseApi.extend({ prefixUrl: '/payments' })
export const eventsApi = baseApi.extend({ prefixUrl: '/events' })
export const eventDraftsApi = baseApi.extend({ prefixUrl: '/eventDrafts' })
