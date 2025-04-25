import { KeyPrefix } from 'i18next'
import { UseTranslationResponse, useTranslation } from 'react-i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: Localizations
  }
}

export const useT = <N extends LocalizationsNamespaces = 'common', TKPrefix extends KeyPrefix<N> = undefined>(
  ns?: N | N[]
): UseTranslationResponse<N, TKPrefix> => useTranslation(ns) as UseTranslationResponse<N, TKPrefix>
