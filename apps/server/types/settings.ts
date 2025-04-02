import { type } from 'arktype'

import { intId, modelIntId } from './db'
import { UserDto } from './users'

export const settingsBase = type({
  UTCTimeDiff: 'number.integer',
  notificationTime: 'string',
  stylization: {
    'primaryColor?': 'string',
    'secondaryColor?': 'string',
  },
})

export const settings = settingsBase.merge({ userId: intId })
export type Settings = typeof settings.infer

export const settingsDto = modelIntId.merge(settings)
export type SettingsDto = typeof settingsDto.infer

export type SettingsFullData = SettingsDto & {
  user: UserDto
}
