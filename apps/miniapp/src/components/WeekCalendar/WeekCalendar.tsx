import classNames from 'classnames'
import dayjs from 'dayjs'
import { useRef } from 'react'

import { Events } from 'api'

import { useTransitionSwipe } from '@/hooks'
import { useModalStore } from '@/store'
import { getSortedDayEvents } from '@/utils/events'

import { WeekEventsList } from './WeekEventsList'
import { WeekHeader } from './WeekHeader'
import styles from './styles.module.scss'
import { WeekDayOption } from './types'

type Props = {
	date: dayjs.Dayjs
	setDate: (date: dayjs.Dayjs) => void
	events: Events.List.ResponseBody
}

export const WeekCalendar = ({ date, setDate, events }: Props) => {
	const listRef = useRef<HTMLDivElement>(null)

	const { onOpen } = useModalStore()

	const { ref, direction, status } = useTransitionSwipe({
		onLeft: () => setDate(date.add(1, 'week')),
		onRight: () => setDate(date.subtract(1, 'week')),
	})

	const currentWeek = date.startOf('week')
	const weekdays = Array.from({ length: 7 }, (_, i): WeekDayOption => {
		const date = currentWeek.add(i, 'day')
		const dateEvents = getSortedDayEvents(events, date)

		return {
			date,
			hasEvents: !!dateEvents.length,
			dateString: date.format('DD MMMM'),
			dateEvents,
		}
	})

	const handleDateClick = (index: number) => {
		if (!listRef.current) return

		const dateListItem = listRef.current.children[index] as HTMLDivElement
		const { top } = dateListItem.getBoundingClientRect()

		listRef.current.scrollTo({ top, behavior: 'smooth' })
	}

	return (
		<div ref={ref} className={classNames(styles.weekCalendar, `swipe-${direction}-${status}`)}>
			<WeekHeader days={weekdays} onDayClick={handleDateClick} />
			<WeekEventsList days={weekdays} onEditEvent={onOpen} />
		</div>
	)
}
