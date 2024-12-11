import { z } from 'zod'

import { Pretty } from '../common'

import { ModelIntBase, intId } from './postgre'
import { UserDto } from './user.schema'

export const settings = z.object({
	userId: intId,
	notificationTime: z.string(),
	stylization: z
		.object({
			primaryColor: z.string(),
		})
		.partial()
		.default({}),
})

export type SettingsBase = z.infer<typeof settings>
export type SettingsDto = Pretty<ModelIntBase & SettingsBase>

export type SettingsFullData = SettingsDto & {
	user: UserDto
}
