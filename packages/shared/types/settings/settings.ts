import { z } from 'zod'

import { Pretty } from '../common'
import { ModelBase } from '../postgre'

export const settingsSchema = z.object({
	notificationTime: z.string(),
	stylization: z.object({
		primaryColor: z.string(),
		secondaryColor: z.string(),
	}),
})

export type SettingsBase = z.infer<typeof settingsSchema>
export type Settings = Pretty<ModelBase & SettingsBase>
