import path from 'node:path'
import { I18n } from 'i18n'

import { Log } from '../logger'

export const i18n = new I18n({
	defaultLocale: 'ru',
	locales: ['ru'],
	directory: path.join(__dirname, 'locales'),
	objectNotation: true,
	missingKeyFn: (locale, key) => {
		const message = `🌏i18next: Missing translation for ${key} in locale: ${locale}`

		Log.warn(message)

		return message
	},
	api: {
		__mf: 't',
	},
})
