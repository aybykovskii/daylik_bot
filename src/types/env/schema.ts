import { z } from 'zod'

export const commonEnvSchema = z.object({
	MODE: z.enum(['development', 'production']),
	SERVER_PORT: z.string(),
	BOT_AUTHENTICATE_HEADER_KEY: z.string(),
	BOT_AUTHENTICATE_HEADER_VALUE: z.string(),
})

export type CommonEnv = z.infer<typeof commonEnvSchema>
