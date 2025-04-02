import { type } from 'arktype'

import { intId } from '@/types/db'
import { settingsBase } from '@/types/settings'

export const settingsError = type(`
	'ERR_SETTINGS_DOES_NOT_EXIST'
| 'ERR_SETTINGS_ALREADY_EXISTS'
| 'ERR_SETTINGS_INVALID_DATA'
| 'ERR_SETTINGS_INTERNAL'
`)

export type SettingsError = typeof settingsError.infer

const partialBase = settingsBase.partial()

export const createSettingsDto = partialBase.merge({ userId: intId })
export type CreateSettingsDto = typeof createSettingsDto.infer

export const updateSettingsDto = partialBase
export type UpdateSettingsDto = typeof updateSettingsDto.infer
