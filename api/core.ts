import ky, { HTTPError, Input, Options } from 'ky'

import { ErrorResponse } from '~types'

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
		if (!response) return

		const { error } = await response.json<ErrorResponse>()

		console.info(`Request ${request.method} ${request.url} failed:\n ${error}`)
	}

	private safeCall = async <T>(request: Promise<T>, defaultValue: NoInfer<T>): Promise<T> => {
		try {
			return await request
		} catch (e) {
			this.errorMiddleware(e as HTTPError)
			return defaultValue
		}
	}

	get = async <T>(url: Input, defaultValue: T, options?: Options): Promise<T> =>
		this.safeCall(this.client.get(url, options).json<T>(), defaultValue)

	post = async <T>(url: Input, defaultValue: T, options?: Options): Promise<T> =>
		this.safeCall(this.client.post(url, options).json<T>(), defaultValue)

	patch = async <T>(url: Input, defaultValue: T, options?: Options): Promise<T> =>
		this.safeCall(this.client.patch(url, options).json<T>(), defaultValue)

	delete = async <T>(url: Input, defaultValue: T, options?: Options): Promise<T> =>
		this.safeCall(this.client.delete(url, options).json<T>(), defaultValue)
}

const headers = {
	[process.env.AUTHENTICATE_HEADER_KEY as string]: process.env.AUTHENTICATE_HEADER_VALUE,
}

const serverApi = new ApiClient({
	prefixUrl: `${process.env.DOMAIN}:${process.env.SERVER_PORT}/api`,
	headers,
})

export const coreApi = serverApi
