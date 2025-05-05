import { Users } from 'packages/api'

export const isUserSubscribed = (user: Users.GetById.ResponseBody) =>
  user.subscription.status === 'active' || user.role !== 'user'
