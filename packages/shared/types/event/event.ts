import { z } from 'zod'

import { Pretty } from '../common'
import { ModelBase, modelId } from '../postgre'

export const eventDate = z.string().brand<'mm.dd.yyyy'>()
export type EventDate = z.infer<typeof eventDate>

export const eventPeriod = z.enum(['everyDay', 'everyWeek', 'everyMonth', 'once'])
export type EventPeriod = z.infer<typeof eventPeriod>

export const eventBase = z.object({
	userId: modelId,
	date: eventDate,
	time: z.string().nullable(),
	period: eventPeriod,
	text: z.string(),
	emoji: z.string(),
	weekDayNumber: z.number(),
	monthDayNumber: z.number(),
})

export type EventBase = z.infer<typeof eventBase>

export type Event = Pretty<ModelBase & EventBase>
