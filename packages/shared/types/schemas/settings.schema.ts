import { z } from 'zod'

import { Pretty } from '../common'

import { withDbId } from './base.schema'
import { ModelIntBase, intId } from './postgre'
import { UserDto, user } from './user.schema'

export const settings = z.object({
	userId: intId,
	notificationTime: z.string(),
	stylization: z.object({
		primaryColor: z.string(),
	}),
})

export type SettingsBase = z.infer<typeof settings>
export type SettingsDto = Pretty<ModelIntBase & SettingsBase>

export type SettingsFullData = SettingsDto & {
	user: UserDto
}

export const createSettingsDto = settings.extend({
	notificationTime: settings.shape.notificationTime.optional(),
	stylization: settings.shape.stylization.optional(),
})
export type CreateSettingsDto = Pretty<z.infer<typeof createSettingsDto>>

export const updateSettingsDto = settings.omit({ userId: true }).partial()
export type UpdateSettingsDto = Pretty<z.infer<typeof updateSettingsDto>>

export const settingsResponseDto = settings.extend(withDbId.shape)
export type SettingsResponseDto = Pretty<z.infer<typeof settingsResponseDto>>

export const settingsFullDataResponseDto = settings.extend({
	user: user.extend(withDbId.shape),
})
export type SettingsFullDataResponseDto = Pretty<z.infer<typeof settingsFullDataResponseDto>>
