import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useTransitionState } from 'react-transition-state'

type Arg = {
	onLeft: () => void
	onRight: () => void
}

export const useTransitionSwipe = ({ onLeft, onRight }: Arg) => {
	const [direction, setDirection] = useState<'left' | 'right'>('left')

	// const time = Number.parseInt(
	// 	getComputedStyle(document.documentElement).getPropertyValue('--swipe-animation-time'),
	// 	10
	// )

	const time = 300

	const [{ status }, toggle] = useTransitionState({
		timeout: time,
		initialEntered: true,
		unmountOnExit: true,
		enter: true,
		exit: true,
		preEnter: true,
	})

	const { ref } = useSwipeable({
		onSwipedLeft: () => {
			setDirection('left')
			setTimeout(() => {
				toggle(false)
				setTimeout(() => {
					onLeft()
					toggle(true)
				}, time / 2)
			}, 0)
		},
		onSwipedRight: () => {
			setDirection('right')
			setTimeout(() => {
				toggle(false)
				setTimeout(() => {
					onRight()
					toggle(true)
				}, time / 2)
			}, 0)
		},
	})

	

	return {
		ref,
		direction,
		time,
		status,
		toggle,
	}
}