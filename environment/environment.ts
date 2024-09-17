import dotenv from 'dotenv'
import { z } from 'zod'
import 'dotenv/config'
import path from 'node:path'

import { commonLogger } from '~logger'

export const envSchema = z
	.object({
		MODE: z.enum(['development', 'production']),

		DOMAIN: z.string(),
		SERVER_PORT: z.string(),
		BOT_PORT: z.string(),
		MINI_APP_PORT: z.string(),

		AUTHENTICATE_HEADER_KEY: z.string(),
		AUTHENTICATE_HEADER_VALUE: z.string(),

		TG_BOT_TOKEN: z.string(),
		OPENAI_API_KEY: z.string(),
		MESSAGE_SEPARATOR: z.string(),

		POSTGRES_HOST: z.string(),
		POSTGRES_PORT: z.coerce.number(),
		POSTGRES_USER: z.string(),
		POSTGRES_PASSWORD: z.string(),
		POSTGRES_DB: z.string(),
	})
	.passthrough()

export type Env = z.infer<typeof envSchema>

export class Environment {
	value: Env

	constructor() {
		const { parsed, error } = dotenv.config({ path: path.resolve(__dirname, '../.env') })

		if (error || !parsed) {
			commonLogger.error(
				`Catch error while loading environment: ${error?.message ?? 'could not be parsed'}`
			)
			throw error
		}

		const result = envSchema.safeParse(parsed)

		if (!result.success) {
			commonLogger.error(`Catch error while parsing environment: ${result.error.message}`)
			throw result.error
		}

		commonLogger.info('Starting with environment:', { env: result.data })
		this.value = result.data
	}
}

export const env = new Environment().value
