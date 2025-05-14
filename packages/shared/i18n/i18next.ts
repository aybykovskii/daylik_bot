import { default as i18n } from 'i18next'
import Backend from 'i18next-node-fs-backend'
import resourcesToBackend from 'i18next-resources-to-backend'

export type I18n = typeof i18n

export const createI18next = (instance: I18n): I18n => {
  instance
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

  const baseT = instance.t

  instance.t = ((key: string, replace?: Record<string, unknown>) => {
    const result = baseT(key.endsWith('random') ? key.replace('.random', '') : key, {
      replace,
      returnObjects: true,
    }) as string | string[]

    if (Array.isArray(result)) {
      const index = Math.floor(Math.random() * result.length)
      return result[index]
    }

    return result
  }) as unknown as typeof baseT

  return instance
}

const i18next = createI18next(i18n.use(Backend))

export { i18next }
