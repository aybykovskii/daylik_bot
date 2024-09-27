import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const userFriendConnection = z.object({
	userId: intId,
	friendId: intId,
})

export type UserFriendConnectionBase = z.infer<typeof userFriendConnection>
export type UserFriendConnectionDto = Pretty<ModelIntBase & UserFriendConnectionBase>

export type UserFriendConnectionFullData = UserFriendConnectionDto & {
	user: UserDto
	friend: UserDto
}
