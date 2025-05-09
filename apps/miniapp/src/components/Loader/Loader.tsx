import CurvedText from 'react-curved-text'

import { useT } from '@/hooks'

import { Cat } from '../icons'

import styles from './styles.module.scss'

export const Loader = () => {
  const { t } = useT('miniApp')

  return (
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
        text={Array.from({ length: 4 }).fill(t('loading')).join(' ')}
      />
      <Cat
        height={200}
        width={160}
      />
    </div>
  )
}
