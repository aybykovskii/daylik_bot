import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { ModelIntBase } from './postgre'
import { UserDto, user } from './user.schema'

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

export const createRoleDto = role
export type CreateRoleDto = Pretty<z.infer<typeof createRoleDto>>

export const updateRoleDto = role.omit({ description: true })
export type UpdateRoleDto = Pretty<z.infer<typeof updateRoleDto>>

export const roleResponseDto = role.extend(withDbId.shape)
export type RoleResponseDto = Pretty<z.infer<typeof roleResponseDto>>

export const roleFullDataResponseDto = role.extend({
	user: user.extend(withDbId.shape),
})
export type RoleFullDataResponseDto = Pretty<z.infer<typeof roleFullDataResponseDto>>

export const rolesResponseDto = z.array(roleResponseDto)
export type RolesResponseDto = Pretty<z.infer<typeof rolesResponseDto>>
