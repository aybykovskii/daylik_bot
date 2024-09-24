import { InitData } from '@telegram-apps/sdk-react'
import React, { useContext } from 'react'

import { makeApi } from '~api'
import { ModelId, UserFullData, ViewType } from '~types'

export type AppContextData = {
	api: ReturnType<typeof makeApi>
	user: UserFullData
	view: ViewType
	initData: InitData
	editingEventId: ModelId | null
	isModalOpen: boolean
	onOpenModal: (event: ModelId | null) => void
	onCloseModal: () => void
	onLoadUser: (id: number) => void
}

export const AppContext = React.createContext<AppContextData | null>(null)

export const useAppContext = () => {
	const c = useContext(AppContext)

	if (!c) {
		throw new Error('useAppContext must be used within a AppContextProvider')
	}

	return c
}
