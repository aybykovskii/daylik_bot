import locale from './src/common/i18n/locales/ru.json'

type Paths<T> = T extends object
	? {
			[K in keyof T]: K extends string ? (T[K] extends object ? `${K}.${Paths<T[K]>}` : `${K}`) : never
		}[keyof T]
	: never

declare global {
	namespace Express {
		export interface Response {
			t(phrase: Paths<typeof locale>, replace?: Record<string, unknown>): string
		}
	}

	namespace i18n {
		class I18next extends I18n {
			__mf(phrase: Paths<typeof locale>, replace?: Record<string, unknown>): string
		}
	}
}
