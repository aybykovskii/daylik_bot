import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import { Event, eventDate } from 'shared/types'

import styles from './styles.module.scss'

type Props = {
	event: Event | null
	onSave: (event: Pick<Event, 'date' | 'time' | 'emoji' | 'text'>) => void
	onDelete: (id: Event['id']) => void
}

export const EventModal = ({ event, onSave, onDelete }: Props) => {
	const modalElement = document.getElementById('modal')

	// dayjs(event.date) doesn't work in safari
	//! TODO: Change date format to YYYY-MM-DD
	const [M = 0, D = 0, Y = 0] = (event?.date ?? '').split('.').map(Number)

	const [date, setDate] = useState(dayjs(event?.date ? new Date(Y, M - 1, D) : undefined))
	const [time, setTime] = useState(event?.time ?? '12:00')
	const [isAllDay, setIsAllDay] = useState(!event?.time || false)
	const [emoji, setEmoji] = useState(event?.emoji ?? '😀')
	const [isEmojiSelectorOpen, setIsEmojiSelectorOpen] = useState(false)
	const [text, setText] = useState(event?.text ?? '')

	const handleSave = () => {
		const updatedEvent: Pick<Event, 'date' | 'time' | 'emoji' | 'text'> = {
			date: eventDate.parse(date.format('MM.DD.YYYY')),
			time: isAllDay ? null : time,
			emoji,
			text,
		}

		onSave(updatedEvent)
	}

	if (!modalElement) return null

	return createPortal(
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.params}>
					<label htmlFor="date">
						Дата
						<input
							id="date"
							type="date"
							min={dayjs().format('YYYY-MM-DD')}
							max={dayjs().endOf('year').format('YYYY-MM-DD')}
							value={date.format('YYYY-MM-DD')}
							onChange={(e) => {
								console.log('date selected', e.target.value)

								setDate(dayjs(e.target.value))
							}}
						/>
					</label>
					<label>
						Emoji
						<button
							className={styles.secondaryButton}
							onClick={() => setIsEmojiSelectorOpen(!isEmojiSelectorOpen)}
						>
							{emoji}
						</button>
					</label>
				</div>
				<div className={styles.params}>
					<label htmlFor="time">
						Время
						<input
							id="time"
							type={isAllDay ? 'text' : 'time'}
							value={isAllDay ? '' : time}
							disabled={isAllDay}
							min="07:00"
							max="23:59"
							onChange={(e) => setTime(e.target.value)}
						/>
					</label>
					<label>
						Весь день
						<input type="checkbox" checked={isAllDay} onChange={(e) => setIsAllDay(e.target.checked)} />
					</label>
				</div>
				{isEmojiSelectorOpen && (
					<Picker
						icons="outline"
						theme="light"
						locale="ru"
						navPosition="bottom"
						previewPosition="none"
						skinTonePosition="none"
						data={data}
						onEmojiSelect={({ native }: { native: string }) => {
							setEmoji(native)
							setIsEmojiSelectorOpen(false)
						}}
					/>
				)}

				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Текст"
					className={styles.text}
				/>
				<div className={styles.actions}>
					{event && (
						<button data-action="delete" onClick={() => onDelete(event.id)}>
							Удалить
						</button>
					)}
					<button data-name="primary" onClick={handleSave}>
						Сохранить
					</button>
				</div>
			</div>
		</div>,
		modalElement
	)
}
