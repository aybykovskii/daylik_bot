import {
	FloatingArrow,
	FloatingPortal,
	arrow,
	autoUpdate,
	flip,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useRole,
} from '@floating-ui/react'
import cn from 'classnames'
import { useRef, useState } from 'react'

import { Events } from 'api'

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
	id: Events.Get.ResponseBody['id']
	emoji: string
	text: string
	onEdit: (id: Events.Get.ResponseBody['id']) => void
} & (MonthBadgeProps | WeekBadgeProps)

export const EventBadge = ({ isBig, id, emoji, text, isTooltipDisabled, onEdit }: Props) => {
	const arrowRef = useRef(null)
	const [open, setOpen] = useState(false)

	const handleEdit = () => onEdit(id)

	if (isBig) {
		return (
			<button onDoubleClick={handleEdit} className={cn(styles.eventBadge, styles.isFullWidth)}>
				{`${emoji} ${text}`}
			</button>
		)
	}

	const { context, refs, floatingStyles } = useFloating<HTMLDivElement>({
		open,
		onOpenChange: setOpen,
		placement: 'top',
		whileElementsMounted: autoUpdate,
		middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
	})

	const click = useClick(context)
	const dismiss = useDismiss(context)
	const role = useRole(context, { role: 'tooltip' })

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

	return (
		<>
			<div
				ref={refs.setReference}
				{...getReferenceProps({
					className: styles.eventBadge,
				})}
			>
				{emoji}
			</div>
			{open && !isTooltipDisabled && (
				<FloatingPortal>
					<div
						ref={refs.setFloating}
						style={floatingStyles}
						{...getFloatingProps({ className: styles.tooltip })}
					>
						<FloatingArrow ref={arrowRef} context={context} />
						<>
							{text}
							<button data-name="secondary" onClick={handleEdit}>
								<Edit />
							</button>
						</>
					</div>
				</FloatingPortal>
			)}
		</>
	)
}
