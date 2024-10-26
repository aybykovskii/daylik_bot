import { z } from 'zod'

import { PrettyZod } from '../common'
import { role, user } from '../schemas'

import { withDbId } from './base.dto'

export const createRoleDto = role
export type CreateRoleDto = PrettyZod<typeof createRoleDto>

export const updateRoleDto = role.omit({ description: true })
export type UpdateRoleDto = PrettyZod<typeof updateRoleDto>

export const roleResponseDto = role.extend(withDbId.shape)
export type RoleResponseDto = PrettyZod<typeof roleResponseDto>

export const roleFullDataResponseDto = role.extend({
	user: user.extend(withDbId.shape),
})
export type RoleFullDataResponseDto = PrettyZod<typeof roleFullDataResponseDto>

export const rolesResponseDto = z.array(roleResponseDto)
export type RolesResponseDto = PrettyZod<typeof rolesResponseDto>
