import i18next from 'i18next'
import Backend from 'i18next-node-fs-backend'
import resourcesToBackend from 'i18next-resources-to-backend'

i18next
	.use(Backend)
	.use(
		resourcesToBackend((language, namespace, callback) => {
			import(`./${language}/${namespace}.json`)
				.then((resources) => {
					callback(null, resources)
				})
				.catch((error) => {
					callback(error, null)
				})
		})
	)
	.init({
		lng: 'ru',
		fallbackLng: 'ru',
		ns: ['common', 'server', 'bot', 'miniApp'],
		returnNull: false,
		defaultNS: 'common',
		fallbackNS: 'common',
		nsSeparator: '.',
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: true,
		},
		saveMissing: true,
		saveMissingTo: 'all',
		missingKeyHandler: (_lng, ns, key) => {
			console.log(`🌏i18next: Missing translation "${ns}.${key}".`)
		},
	})

export { i18next }
