import CurvedText from 'react-curved-text'

import { Cat } from '../icons'

import { i18next } from '~i18n'
import styles from './styles.module.scss'

export const Loader = () => (
	<div className={styles.loader}>
		<CurvedText
			width={330}
			height={330}
			cx={165}
			cy={165}
			rx={120}
			ry={120}
			startOffset={0}
			reversed={true}
			text={Array.from({ length: 4 }).fill(i18next.t('miniApp.loading')).join(' ')}
		/>
		<Cat height={200} width={160} />
	</div>
)
