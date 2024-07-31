import { z } from 'zod'
import { commonEnvSchema } from '~types'

export const serverEnvSchema = commonEnvSchema.extend({
	SERVER_PORT: z.coerce.number(),
	POSTGRES_HOST: z.string(),
	POSTGRES_PORT: z.coerce.number(),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	POSTGRES_DB: z.string(),
})

export type ServerEnv = z.infer<typeof serverEnvSchema>
