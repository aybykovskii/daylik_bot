import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

type Arg = {
	onLeft: () => void
	onRight: () => void
}

export const useSwipe = ({ onLeft, onRight }: Arg) => {
	const [direction, setDirection] = useState<'left' | 'right'>('left')

	const { ref } = useSwipeable({
		onSwipedLeft: () => {
			setDirection('right')
			setTimeout(onLeft, 0)
		},
		onSwipedRight: () => {
			setDirection('left')
			setTimeout(onRight, 0)
		},
	})

	return {
		ref,
		direction,
		time: 200,
	}
}
