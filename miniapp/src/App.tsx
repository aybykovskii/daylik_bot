import { useInitData } from '@telegram-apps/sdk-react'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'

import { ModelId, UserFullData, ViewObject, ViewType, modelId } from '~types'

import i18next from 'i18next'
import { toast } from 'react-toastify';
import { makeApi } from '~api'
import { AppContext, AppContextData } from './AppContext'
import { Header } from './components/Header'
import { InDevelopment } from './components/InDevelopment'
import { Loader } from './components/Loader'
import { NavBar } from './components/NavBar'
import { useInitMiniApp } from './hooks'
import { MainPage } from './routes/main'

dayjs.locale(ru)
dayjs.extend(timezone)
dayjs.extend(localeData)
dayjs.extend(localizedFormat)

const api = makeApi()

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

	const [user, setUser] = useState<UserFullData>()
	const [isLoading, setIsLoading] = useState(true)

	const [view, setView] = useState<ViewType>('month')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingEventId, setEditingEventId] = useState<ModelId | null>(null)

	const loadUser = useCallback(async (id: number) => {
		try {
			const user = await toast.promise(
				api.users.get(modelId.parse(id)),
				{
					error: 'Не удалось загрузить данные пользователя',
				}
		)

			if (!user) {
				throw new Error(`Could not get user ${id}`)
			}

			setIsLoading(false)
			setUser(user)

			console.log(`User ${id} loaded`, user)
			return user
		} catch (e) {
			console.error(e)
		}
	}, [])

	useEffect(() => {
		if (!telegramUserId) return

		loadUser(telegramUserId)
	}, [telegramUserId, loadUser])

	const handlePrimaryButtonClick = useCallback(() => {
		if (!isMainRoute) {
			reactNavigator.push('/')
			return
		}
		setIsModalOpen(!isModalOpen)
		isModalOpen && setEditingEventId(null)
	}, [isModalOpen, isMainRoute, reactNavigator])

	const contextValue = useMemo(
		(): AppContextData => ({
			api,
			view,
			editingEventId,
			initData: initData!,
			user: user!,
			isModalOpen,
			onOpenModal: (id) => {
				setEditingEventId(id)
				setIsModalOpen(true)
			},
			onCloseModal: () => {
				setIsModalOpen(false)
				setEditingEventId(null)
			},
			onLoadUser: loadUser,
		}),
		[view, editingEventId, initData, user, loadUser, isModalOpen]
	)

	if (isLoading || !user) {
		return <Loader />
	}

	return (
		<Router location={location} navigator={reactNavigator}>
			<AppContext.Provider value={contextValue}>
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
			</AppContext.Provider>
		</Router>
	)
}
