import { InitData } from '@telegram-apps/sdk-react'
import React, { useContext } from 'react'

import { api } from 'api'
import { ViewType } from 'shared/types'

export type AppContextData = {
	api: typeof api
	view: ViewType
	initData: InitData
	editingEventId: number | null
	isModalOpen: boolean
	onOpenModal: (event: number | null) => void
	onCloseModal: () => void
}

export const AppContext = React.createContext<AppContextData | null>(null)

export const useAppContext = () => {
	const c = useContext(AppContext)

	if (!c) {
		throw new Error('useAppContext must be used within a AppContextProvider')
	}

	return c
}
