import { create } from 'zustand'

import { ViewType } from 'shared/types'

type UiStore = {
	view: ViewType
	setView: (view: ViewType) => void
}

export const useUiStore = create<UiStore>((set) => ({
	view: 'month',
	setView: (view) => set({ view }),
}))
