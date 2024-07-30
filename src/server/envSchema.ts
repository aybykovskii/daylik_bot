import { z } from 'zod'

export const envSchema = z.object({
	SERVER_PORT: z.coerce.number(),
	POSTGRES_HOST: z.string(),
	POSTGRES_PORT: z.coerce.number(),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	POSTGRES_DB: z.string(),
})
