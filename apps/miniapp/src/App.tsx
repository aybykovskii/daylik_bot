import { initData, useSignal } from '@telegram-apps/sdk-react'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import { useCallback, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom'

import { api } from 'api'
import { i18next } from 'shared/i18n'
import { ViewObject } from 'shared/types'

import { Header } from './components/Header'
import { InDevelopment } from './components/InDevelopment'
import { Loader } from './components/Loader'
import { NavBar } from './components/NavBar'
import { MainPage } from './routes/main'
import { useModalStore, useUiStore, useUserStore } from './store'

dayjs.locale(ru)
dayjs.extend(timezone)
dayjs.extend(localeData)
dayjs.extend(localizedFormat)

export const App = () => {
	const views: ViewObject[] = [
		{ type: 'month', title: i18next.t('miniApp.views.month') },
		{ type: 'week', title: i18next.t('miniApp.views.week') },
	]

	const initUser = useSignal(initData.user)
	const telegramUserId = initUser?.id
	const username = initUser?.username
	const isMainRoute = location.pathname === '/'

	const { loadUser, user, isLoaded } = useUserStore()
	const { view, setView } = useUiStore()
	const { isOpen: isModalOpen, setIsOpen: setIsModalOpen, setEventId } = useModalStore()

	useEffect(() => {
		if (!telegramUserId) return

		api.auth.loginCreate({ telegramUserId: `${telegramUserId}` }).then(() => {
			loadUser(telegramUserId)
		})
	}, [telegramUserId, loadUser])

	useEffect(() => {
		if (!user || !user.settings.stylization?.primaryColor) return

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
		<BrowserRouter>
			<Header
				username={username}
				onViewChange={setView}
				initialView={view}
				views={isMainRoute ? views : undefined}
			/>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/customize" element={<InDevelopment />} />
				<Route path="/user" element={<InDevelopment />} />
				<Route path="/explore" element={<InDevelopment />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>

			<NavBar isButtonActivated={isModalOpen} onClick={handlePrimaryButtonClick} />
		</BrowserRouter>
	)
}
