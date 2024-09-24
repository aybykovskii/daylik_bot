import cn from 'classnames'
import dayjs from 'dayjs'

import { Event, ModelId } from '~types'

import { EventBadge } from '@/components/EventBadge'
import { chunkArray, getSortedDayEvents } from '@/utils'

import styles from './styles.module.scss'

type Props = {
	date: dayjs.Dayjs
	events: Event[]
	editingEventId: ModelId | null
	onEditEvent: (eventId: ModelId) => void
}

export const MonthCalendarBody = ({ date, events, editingEventId, onEditEvent }: Props) => {
	const isTooltipDisabled = !!editingEventId
	const monthStart = date.startOf('month').startOf('week')
	const monthEnd = date.endOf('month').endOf('week')
	const daysInMonth = monthEnd.add(1, 'day').diff(monthStart, 'days')
	const monthDays = Array.from({ length: daysInMonth }, (_, i) => monthStart.add(i, 'day'))
	const weeks = chunkArray(monthDays, 7)

	return (
		<tbody>
			{weeks.map((weekdays) => (
				<tr key={`week-${weekdays[0].format('DD.MM')}`} className={styles.monthWeek}>
					{weekdays.map((day) => (
						<td key={`day-${day.format('DD.MM')}`} className={styles.dayContainer}>
							<div className={styles.dayContent}>
								<span
									className={cn({
										[styles.anotherMonth]: !day.isSame(date, 'month'),
										[styles.today]: day.isSame(dayjs(), 'day'),
									})}
								>
									{day.format('DD')}
								</span>
								<div className={styles.events}>
									{getSortedDayEvents(events, day).map((event) => (
										<EventBadge
											id={event.id}
											key={event.id}
											emoji={event.emoji}
											text={event.text}
											onEdit={() => onEditEvent(event.id)}
											isTooltipDisabled={isTooltipDisabled}
										/>
									))}
								</div>
							</div>
						</td>
					))}
				</tr>
			))}
		</tbody>
	)
}
