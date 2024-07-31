import { z } from 'zod'
import { commonEnvSchema } from '~types'

export const botEnvSchema = commonEnvSchema.extend({
	TG_BOT_TOKEN: z.string(),
	VOICES_FOLDER: z.string(),
	MESSAGE_SEPARATOR: z.string(),
	OPENAI_API_KEY: z.string(),
})

export type BotEnv = z.infer<typeof botEnvSchema>
