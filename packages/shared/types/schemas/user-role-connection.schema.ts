import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase, intId } from './postgre'
import { RoleDto } from './role.schema'
import { UserDto } from './user.schema'

export const userRoleConnection = z.object({
	userId: intId,
	roleId: intId,
})

export type UserRoleConnectionBase = z.infer<typeof userRoleConnection>
export type UserRoleConnectionDto = Pretty<ModelIntBase & UserRoleConnectionBase>

export type UserRoleConnectionFullData = UserRoleConnectionDto & {
	user: UserDto
	role: RoleDto
}
