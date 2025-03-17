import dayjs from 'dayjs'

import { Events } from 'api'

import { useTransitionSwipe } from '@/hooks'
import { useModalStore } from '@/store'

import { MonthCalendarBody } from './MonthCalendarBody'
import styles from './styles.module.scss'

type Props = {
	date: dayjs.Dayjs
	setDate: (date: dayjs.Dayjs) => void
	events: Events.List.ResponseBody
}

export const MonthCalendar = ({ date, setDate, events }: Props) => {
	const { onOpen, eventId: modalEventId } = useModalStore()

	const { ref, direction, status } = useTransitionSwipe({
		onLeft: () => setDate(date.add(1, 'month')),
		onRight: () => setDate(date.subtract(1, 'month')),
	})

	const localeDate = date.localeData()
	const firstDayOfWeek = localeDate.firstDayOfWeek()
	const weekDays = localeDate.weekdaysMin()
	const calendarWeekDays = [...weekDays.slice(firstDayOfWeek), ...weekDays.slice(0, firstDayOfWeek)]

	return (
		<table ref={ref} className={styles.monthCalendar}>
			<thead>
				<tr>
					{calendarWeekDays.map((day) => (
						<th key={day}>{day}</th>
					))}
				</tr>
			</thead>
			<tbody className={`swipe-${direction}-${status}`}>
				<MonthCalendarBody
					date={date}
					events={events}
					editingEventId={modalEventId}
					onEditEvent={onOpen}
				/>
			</tbody>
		</table>
	)
}
