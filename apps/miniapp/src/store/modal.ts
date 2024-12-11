import { create } from 'zustand'

type ModalStore = {
	isOpen: boolean
	eventId: number | null
	setIsOpen: (isOpen: boolean) => void
	setEventId: (eventId: number | null) => void
	onOpen: (eventId: number | null) => void
	onClose: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
	isOpen: false,
	eventId: null,
	setIsOpen: (isOpen) => set({ isOpen }),
	setEventId: (eventId) => set({ eventId }),
	onOpen: (eventId) => set({ isOpen: true, eventId }),
	onClose: () => set({ isOpen: false, eventId: null }),
}))
