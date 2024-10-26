import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase } from './postgre'
import { UserDto } from './user.schema'

export const roleType = z.enum(['user', 'staff', 'admin'])

export const role = z.object({
	type: roleType,
	description: z.string(),
})

export type RoleType = z.infer<typeof roleType>

export type RoleBase = z.infer<typeof role>
export type RoleDto = Pretty<ModelIntBase & RoleBase>

export type RoleFullData = RoleDto & {
	users: UserDto[]
}
