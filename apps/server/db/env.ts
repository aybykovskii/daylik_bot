import { z } from 'zod'

export const dbEnv = z.object({
	POSTGRES_HOST: z.string(),
	POSTGRES_PORT: z.coerce.number().default(5432),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	POSTGRES_DB: z.string(),
})
