import { initData, useSignal } from '@telegram-apps/sdk-react'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import { useCallback, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { api } from 'api'
import { makeUTCTimeDiff } from 'shared/time'
import { ViewObject } from 'shared/types'

import { Header } from './components/Header'
import { InDevelopment } from './components/InDevelopment'
import { Loader } from './components/Loader'
import { NavBar } from './components/NavBar'
import { useT } from './hooks'
import { MainPage } from './routes/main'
import { useModalStore, useUiStore, useUserStore } from './store'

dayjs.locale(ru)
dayjs.extend(timezone)
dayjs.extend(localeData)
dayjs.extend(localizedFormat)

api.baseUrl = import.meta.env.DEV ? `http://localhost:${process.env.MINI_APP_PORT}` : ''

export const App = () => {
  const { t } = useT('miniApp')

  const views: ViewObject[] = [
    { type: 'month', title: t('views.month') },
    { type: 'week', title: t('views.week') },
  ]

  const location = useLocation()
  const initUser = useSignal(initData.user)
  const telegramUserId = initUser?.id
  const username = initUser?.username
  const isMainRoute = location.pathname === '/'

  const { loadUser, user, isLoaded } = useUserStore()
  const { view, setView } = useUiStore()
  const { isOpen: isModalOpen, setIsOpen: setIsModalOpen, setEventId } = useModalStore()

  const initializeUser = useCallback(async () => {
    if (!telegramUserId) return

    await api.auth.getApiToken({ telegramUserId: `${telegramUserId}` })

    const u = await loadUser(telegramUserId)

    const hoursTimeDiff = makeUTCTimeDiff(new Date().getTimezoneOffset())

    if (!u || u.settings.UTCTimeDiff === hoursTimeDiff) return

    api.settings.patchById(u.settings.id, { UTCTimeDiff: hoursTimeDiff })
  }, [telegramUserId, loadUser])

  useEffect(() => {
    initializeUser()
  }, [initializeUser])

  useEffect(() => {
    if (!user || !user.settings.stylization?.primaryColor) return

    console.log(user.settings.stylization.primaryColor)

    // document.documentElement.style.setProperty('--primary', user.settings.stylization.primaryColor)
  }, [user])

  const handlePrimaryButtonClick = useCallback(() => {
    setIsModalOpen(!isModalOpen)
    isModalOpen && setEventId(null)
  }, [isModalOpen, setEventId, setIsModalOpen])

  if (!isLoaded || !user) {
    return <Loader />
  }

  return (
    <>
      <Header
        username={username}
        onViewChange={setView}
        initialView={view}
        views={isMainRoute ? views : undefined}
      />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/customize"
          element={<InDevelopment />}
        />
        <Route
          path="/user"
          element={<InDevelopment />}
        />
        <Route
          path="/explore"
          element={<InDevelopment />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>

      <NavBar
        isButtonActivated={isModalOpen}
        onClick={handlePrimaryButtonClick}
      />
    </>
  )
}
