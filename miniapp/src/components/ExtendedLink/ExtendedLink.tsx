import { ComponentProps } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = ComponentProps<typeof Link>

export const ExtendedLink = (props: Props) => {
	const { pathname } = useLocation()

	return <Link {...props} data-opened={pathname === props.to} />
}
