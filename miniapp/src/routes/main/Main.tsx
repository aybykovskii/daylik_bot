import dayjs from 'dayjs'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { CSSTransition } from 'react-transition-group'

import { Event } from '~types'

import { useAppContext } from '@/AppContext'
import { CalendarHeader } from '@/components/CalendarHeader/CalendarHeader'
import { EventModal } from '@/components/EventModal'
import { MonthCalendar } from '@/components/MonthCalendar/MonthCalendar'
import { WeekCalendar } from '@/components/WeekCalendar'

import styles from './styles.module.scss'

export const MainPage = () => {
	const {
		user: { events, id: userId },
		api,
		view,
		editingEventId,
		isModalOpen,
		onCloseModal,
		onLoadUser,
	} = useAppContext()

	const editingEvent = events.find((event) => event.id === editingEventId) ?? null

	const [date, setDate] = useState(dayjs())

	const handleSaveEvent = useCallback(
		async (eventData: Pick<Event, 'date' | 'time' | 'emoji' | 'text'>) => {
			if (editingEventId) {
				toast.promise(
					api.events.update(editingEventId, eventData),
					{
						pending: 'Событие обновляется...',
						success: 'Событие успешно обновлено',
						error: 'Произошла ошибка при обновлении события',
					}
				)
			} else {
				console.log('create event for user:', userId)

				toast.promise(
					api.events .create({ ...eventData, userId, monthDayNumber: 0, weekDayNumber: 0, }),
					{
						pending: 'Событие создается...',
						success: 'Событие успешно создано',
						error: 'Произошла ошибка при создании события',
					}
				)
			}

			onCloseModal()

			onLoadUser(userId)
		},
		[api, editingEventId, onCloseModal, onLoadUser, userId]
	)

	const handleDeleteEvent = useCallback(
		async (eventId: Event['id']) => {
			await api.events.delete(eventId)

			onCloseModal()

			onLoadUser(userId)
		},
		[api, onCloseModal, onLoadUser, userId]
	)

	return (
		<div>
			<CalendarHeader date={date} onSetNow={() => setDate(dayjs())} />

			<section className={styles.section}>
				{view === 'month' ? (
					<MonthCalendar date={date} setDate={setDate} events={events} />
				) : (
					<WeekCalendar date={date} setDate={setDate} events={events} />
				)}
			</section>

			<CSSTransition in={isModalOpen} timeout={300} classNames="modal" unmountOnExit>
				<EventModal event={editingEvent} onDelete={handleDeleteEvent} onSave={handleSaveEvent} />
			</CSSTransition>
		</div>
	)
}
