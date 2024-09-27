import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const userSettings = z.object({
	userId: intId,
	notificationTime: z.string(),
	stylization: z.object({
		primaryColor: z.string(),
	}),
})

export type UserSettingsBase = z.infer<typeof userSettings>
export type UserSettingsDto = Pretty<ModelIntBase & UserSettingsBase>

export type UserSettingsFullData = UserSettingsDto & {
	user: UserDto
}
