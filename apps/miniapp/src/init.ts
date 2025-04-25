import {
  backButton,
  expandViewport,
  initData,
  init as initSDK,
  miniApp,
  postEvent,
  setDebug,
  setMiniAppBackgroundColor,
  setMiniAppHeaderColor,
  viewport,
} from '@telegram-apps/sdk-react'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { createI18next } from 'shared/i18n'

export async function init(debug: boolean) {
  setDebug(debug)

  createI18next(i18next.use(initReactI18next))
  initSDK()

  debug && import('eruda').then((lib) => lib.default.init()).catch(console.error)

  // Check if all required components are supported.
  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error('ERR_NOT_SUPPORTED')
  }

  // Mount all components used in the project.
  backButton.mount()
  miniApp.mount().then(() => {
    setMiniAppBackgroundColor('#ffffff')
    setMiniAppHeaderColor('#ffffff')
  })
  initData.restore()

  viewport
    .mount()
    .catch((e) => {
      console.error('Something went wrong mounting the viewport', e)
    })
    .then(() => {
      expandViewport()
    })

  postEvent('web_app_setup_swipe_behavior', { allow_vertical_swipe: false })
  postEvent('web_app_expand')
}
