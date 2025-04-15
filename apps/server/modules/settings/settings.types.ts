import { type } from 'arktype'

import { intId } from '@/types/db'
import { settingsBase } from '@/types/settings'

export const SettingsError = {
  DoesNotExist: type('"ERR_SETTINGS_DOES_NOT_EXIST"'),
  AlreadyExists: type('"ERR_SETTINGS_ALREADY_EXISTS"'),
}

const partialBase = settingsBase.partial()

export const createSettingsDto = partialBase.merge({ userId: intId })
export type CreateSettingsDto = typeof createSettingsDto.infer

export const updateSettingsDto = partialBase
export type UpdateSettingsDto = typeof updateSettingsDto.infer
