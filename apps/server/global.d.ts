import 'shared/global'

declare module 'fastify' {
	interface FastifyRequest {
		userId: number | null
		t: (phrase: I18nPhrase, replace?: Record<string, unknown>) => string
	}
}
