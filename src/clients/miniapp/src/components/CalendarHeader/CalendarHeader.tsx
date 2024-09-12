import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import { Customize, Now } from '@/components/icons'

import styles from './styles.module.scss'

type Props = {
	date: dayjs.Dayjs
	onSetNow: () => void
}

export const CalendarHeader = ({ date, onSetNow }: Props) => {
	const isNow = date.isSame(dayjs(), 'week')

	return (
		<div className={styles.calendarHeader}>
			<Now aria-disabled={isNow} onClick={onSetNow} />
			<span>{date.format('MMMM YYYY')}</span>
			<Link to="/customize">
				<Customize />
			</Link>
		</div>
	)
}
