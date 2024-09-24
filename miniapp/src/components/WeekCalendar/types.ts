import dayjs from 'dayjs'
import { Event } from '~types'

export type WeekDayOption = {
	date: dayjs.Dayjs
	dateEvents: Event[]
	dateString: string
	hasEvents: boolean
}
