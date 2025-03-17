import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

import { Explore, Home, Plus, User } from '@/components/icons'

import { ExtendedLink } from '../ExtendedLink'

import styles from './styles.module.scss'

type Props = {
	isButtonActivated: boolean
	onClick: () => void
}

export const NavBar = ({ isButtonActivated, onClick }: Props) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	
	const handleClick = () => {
		if (pathname !== '/') {
			navigate('/')
			return
		}
		onClick()
	}

	return (
		<div className={styles.navBar}>
			<ExtendedLink className={styles.link} to="/explore">
				<Explore />
			</ExtendedLink>
			<button
				className={cn(styles.primaryButton, isButtonActivated && styles.active)}
				onClick={handleClick}
			>
				{pathname === '/' ? <Plus /> : <Home />}
			</button>
			<ExtendedLink className={styles.link} to="/user">
				<User />
			</ExtendedLink>
		</div>
	)
}
