import { useState } from 'react'

import styles from './styles.module.scss'

type SwitchItem<T extends string> = {
	title: string
	value: T
}

type Props<T extends string> = {
	items: SwitchItem<T>[]
	initialValue: string
	onChange: (value: T) => void
}

export const Switch = <T extends string>({ items, initialValue, onChange }: Props<T>) => {
	const [value, setValue] = useState(initialValue)

	return (
		<div className={styles.switch}>
			{items.map((item) => (
				<button
					key={item.value}
					data-active={item.value === value}
					onClick={() => {
						setValue(item.value)
						onChange(item.value)
					}}
				>
					{item.title}
				</button>
			))}
		</div>
	)
}
