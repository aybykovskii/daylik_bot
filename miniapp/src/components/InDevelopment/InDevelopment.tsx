import { Cat } from '../icons'

import styles from './styles.module.scss'

export const InDevelopment = () => (
	<div className={styles.inDevelopment}>
		<Cat hanging={200} height={160} />
		<span>Страница еще находится в разработке</span>
	</div>
)
