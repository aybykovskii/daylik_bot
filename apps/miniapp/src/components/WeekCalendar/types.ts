import dayjs from 'dayjs'
import { Event } from 'shared/types'

export type WeekDayOption = {
	date: dayjs.Dayjs
	dateEvents: Event[]
	dateString: string
	hasEvents: boolean
}
