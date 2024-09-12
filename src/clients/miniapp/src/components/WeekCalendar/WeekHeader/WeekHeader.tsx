import { WeekDayOption } from '../types'

import styles from './styles.module.scss'

type Props = {
	days: WeekDayOption[]
	onDayClick: (index: number) => void
}

export const WeekHeader = ({ days, onDayClick }: Props) => (
	<div className={styles.weekHeader}>
		{days.map(({ date, hasEvents }, dateIndex) => (
			<button
				key={date.format('DD.MM.YYYY')}
				onClick={() => onDayClick(dateIndex)}
				className={styles.dayButton}
				type="button"
			>
				<div className={styles.dateInfo}>
					<span>{date.format('dd' /** Short day name */)}</span>
					<span>{date.format('DD' /** Date */)}</span>
				</div>
				<span className={styles.marker} data-has-events={hasEvents} />
			</button>
		))}
	</div>
)
