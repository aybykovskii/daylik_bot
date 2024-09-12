import 'dotenv/config'
import { AnyZodObject, z } from 'zod'

import dotenv from 'dotenv'
import { Log } from '~common/logger'

export class Environment<Schema extends AnyZodObject> {
	public keys: z.infer<Schema>

	constructor(schema: Schema, envPaths: string[]) {
		const { parsed, error } = dotenv.config({ path: envPaths })

		if (error || !parsed) {
			Log.error(`Catch error while loading environment: ${error?.message || 'could not be parsed'}`)
			throw error
		}

		const env = schema.parse(parsed)

		Log.info('Starting with environment:', env)
		this.keys = env
	}

	static get<Schema extends AnyZodObject>(schema: Schema, envPaths: string[]) {
		return new Environment<Schema>(schema, envPaths).keys
	}
}
