import { toast } from 'react-toastify'
import { create } from 'zustand'

import { Users, api } from 'api'

type UserStore = {
  user: Users.GetById.ResponseBody
  isLoaded: boolean
  isError: boolean

  loadUser: (id: number | string) => Promise<Users.GetById.ResponseBody | null>
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
  } as unknown as Users.GetById.ResponseBody,
  isLoaded: false,
  isError: false,

  loadUser: async (id: number | string) => {
    const user = await toast.promise(api.users.getById(id), {
      error: 'Не удалось загрузить данные пользователя',
    })

    if (!user) {
      set({ isError: true })
      return null
    }

    set({ user, isLoaded: true })
    return user
  },
}))
