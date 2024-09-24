import { forwardRef } from 'react'

import { Event } from '~types'

import { EventBadge } from '@/components/EventBadge'

import { WeekDayOption } from '../types'

import styles from './styles.module.scss'

type Props = {
	days: WeekDayOption[]
	onEditEvent: (id: Event['id']) => void
}

export const WeekEventsList = forwardRef<HTMLDivElement, Props>(({ days, onEditEvent }, ref) => (
	<div ref={ref} className={styles.weekEventsList}>
		{days.map(({ dateString, dateEvents }) => (
			<div className={styles.date} key={dateString}>
				<div className={styles.header}>
					<h3>{dateString}</h3>
					<hr />
				</div>

				<div className={styles.events}>
					{dateEvents.map(({ id, time, emoji, text }) => (
						<div key={id} className={styles.event}>
							{!!time && <div className={styles.time}>{time}</div>}
							<EventBadge isBig id={id} emoji={emoji} text={text} onEdit={onEditEvent} />
						</div>
					))}
				</div>
			</div>
		))}
	</div>
))
