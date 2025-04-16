import { z } from 'zod'

export const envSchema = z
  .object({
    MODE: z.enum(['development', 'production']),

    SERVER_PORT: z.string(),
    BOT_PORT: z.string(),
    MINI_APP_PORT: z.string(),

    JWT_SECRET: z.string(),

    TG_BOT_TOKEN: z.string(),
    OPENAI_API_KEY: z.string(),

    POSTGRES_HOST: z.string(),
    POSTGRES_PORT: z.coerce.number().default(5432),
    POSTGRES_USER: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_DB: z.string(),

    AUTH_HEADER_KEY: z.string(),
    AUTH_HEADER_VALUE: z.string(),

    WEB_APP_URL: z.string(),
  })
  .passthrough()

export type Env = z.infer<typeof envSchema>
