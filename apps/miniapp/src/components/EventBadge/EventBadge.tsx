import Tippy from '@tippyjs/react'
import cn from 'classnames'

import { Event } from 'shared/types'

import { Edit } from '../icons'

import styles from './styles.module.scss'

type MonthBadgeProps = {
	isBig?: false
	isTooltipDisabled?: boolean
}

type WeekBadgeProps = {
	isBig: true
	isTooltipDisabled?: never
}

type Props = {
	id: Event['id']
	emoji: string
	text: string
	onEdit: (id: Event['id']) => void
} & (MonthBadgeProps | WeekBadgeProps)

export const EventBadge = ({ isBig, id, emoji, text, isTooltipDisabled, onEdit }: Props) => {
	const handleEdit = () => onEdit(id)

	if (isBig) {
		return (
			<button onDoubleClick={handleEdit} className={cn(styles.eventBadge, styles.isFullWidth)}>
				{`${emoji} ${text}`}
			</button>
		)
	}

	return (
		<Tippy
			touch
			allowHTML
			animateFill
			interactive
			className={styles.tooltip}
			appendTo={() => document.body}
			disabled={isTooltipDisabled}
			content={
				<>
					{text}
					<button data-name="secondary" onClick={handleEdit}>
						<Edit />
					</button>
				</>
			}
		>
			<div className={styles.eventBadge}>{emoji}</div>
		</Tippy>
	)
}
