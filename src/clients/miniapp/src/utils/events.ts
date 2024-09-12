import dayjs from 'dayjs'
import { Event } from '~types'

export const getSortedDayEvents = (events: Event[], date: dayjs.Dayjs) =>
	events
		.filter((event) => event.date === date.format('MM.DD.YYYY'))
		.toSorted((a, b) => {
			if (!a.time) return -1
			if (!b.time) return 1

			if (a.time < b.time) return -1
			if (a.time > b.time) return 1

			return 0
		})
