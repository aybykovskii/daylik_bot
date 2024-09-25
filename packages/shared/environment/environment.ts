import dotenv from 'dotenv'
import 'dotenv/config'
import path from 'node:path'

import { commonLogger } from '../logger'
import { Env, envSchema } from '../types'

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
