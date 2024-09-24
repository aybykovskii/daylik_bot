import { Link } from 'react-router-dom'

import { ViewObject, ViewType } from '~types'

import { Switch } from '@/components/Switch'
import { Logo, User } from '@/components/icons'
import { getUserAvatarUrl } from '@/utils'

import styles from './styles.module.scss'

type Props = {
	views?: ViewObject[]
	initialView?: ViewType
	onViewChange?: (viewType: ViewType) => void
	username: string | undefined
}

export const Header = ({ views, initialView, username, onViewChange }: Props) => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<Logo />
			</Link>
			{views && initialView && onViewChange && (
				<Switch
					items={views.map(({ title, type }) => ({ title, value: type }))}
					initialValue={initialView}
					onChange={onViewChange}
				/>
			)}
			{username ? (
				<img height={24} width={24} src={getUserAvatarUrl(username)} alt="avatar" />
			) : (
				<User />
			)}
		</header>
	)
}
