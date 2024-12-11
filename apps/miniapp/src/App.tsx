import { useInitData } from '@telegram-apps/sdk-react'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import { useCallback, useEffect } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'

import { api } from 'api'
import { i18next } from 'shared/i18n'
import { ViewObject } from 'shared/types'

import { Header } from './components/Header'
import { InDevelopment } from './components/InDevelopment'
import { Loader } from './components/Loader'
import { NavBar } from './components/NavBar'
import { useInitMiniApp } from './hooks'
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

	const initData = useInitData()
	const { location, reactNavigator } = useInitMiniApp()

	const telegramUserId = initData?.user?.id
	const username = initData?.user?.username
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

	const handlePrimaryButtonClick = useCallback(() => {
		if (!isMainRoute) {
			reactNavigator.push('/')
			return
		}
		setIsModalOpen(!isModalOpen)
		isModalOpen && setEventId(null)
	}, [isModalOpen, isMainRoute, reactNavigator, setEventId, setIsModalOpen])

	if (!isLoaded || !user) {
		return <Loader />
	}

	return (
		<Router location={location} navigator={reactNavigator}>
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
		</Router>
	)
}
