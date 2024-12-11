import { Events } from 'api'
import dayjs from 'dayjs'

export const getSortedDayEvents = (events: Events.List.ResponseBody, date: dayjs.Dayjs) =>
	events
		.filter((event) => event.date === date.format('MM.DD.YYYY'))
		.toSorted((a, b) => {
			if (!a.time) return -1
			if (!b.time) return 1

			if (a.time < b.time) return -1
			if (a.time > b.time) return 1

			return 0
		})
