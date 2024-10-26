import { PrettyZod } from '../common'
import { settings, user } from '../schemas'

import { withDbId } from './base.dto'

export const createSettingsDto = settings.extend({
	notificationTime: settings.shape.notificationTime.optional(),
	stylization: settings.shape.stylization.optional(),
})
export type CreateSettingsDto = PrettyZod<typeof createSettingsDto>

export const updateSettingsDto = settings.omit({ userId: true }).partial()
export type UpdateSettingsDto = PrettyZod<typeof updateSettingsDto>

export const settingsResponseDto = settings.extend(withDbId.shape)
export type SettingsResponseDto = PrettyZod<typeof settingsResponseDto>

export const settingsFullDataResponseDto = settings.extend({
	user: user.extend(withDbId.shape),
})
export type SettingsFullDataResponseDto = PrettyZod<typeof settingsFullDataResponseDto>
