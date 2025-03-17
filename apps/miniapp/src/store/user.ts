import { Users, api } from 'api'
import { toast } from 'react-toastify'
import { create } from 'zustand'

type UserStore = {
	user: Users.Get.ResponseBody
	isLoaded: boolean
	isError: boolean

	loadUser: (id: number | string) => Promise<void>
}

export const useUserStore = create<UserStore>((set) => ({
	user: {
		id: 0,
		fullName: '',
		events: [],
		eventDrafts: [],
		friends: [],
		incomingEventShares: [],
		incomingFriendshipRequests: [],
		outgoingEventShares: [],
		outgoingFriendshipRequests: [],
		payments: [],
		rewards: [],
		roles: [],
		subscription: {
			id: 0,
			userId: 0,
			type: 'trial',
			status: 'active',
			startDate: '',
			endDate: '',
		},
		settings: {},
	} as unknown as Users.Get.ResponseBody,
	isLoaded: false,
	isError: false,

	loadUser: async (id: number | string) => {
		const user = await toast.promise(api.users.get(id), {
			error: 'Не удалось загрузить данные пользователя',
		})

		if (!user) {
			set({ isError: true })
			return
		}

		set({ user, isLoaded: true })
	},
}))
