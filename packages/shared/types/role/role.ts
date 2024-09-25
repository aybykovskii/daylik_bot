import { z } from 'zod'

import { Pretty } from '../common'
import { ModelBase } from '../postgre'

export const roleType = z.enum(['user', 'staff', 'admin'])

export const roleSchema = z.object({
	type: roleType,
	description: z.string(),
})

export type RoleBase = z.infer<typeof roleSchema>
export type Role = Pretty<ModelBase & RoleBase>
