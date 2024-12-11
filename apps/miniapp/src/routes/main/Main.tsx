import dayjs from 'dayjs'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { CSSTransition } from 'react-transition-group'

import { Events, api } from 'api'
import { EventDto } from 'shared/types'

import { CalendarHeader } from '@/components/CalendarHeader/CalendarHeader'
import { EventModal } from '@/components/EventModal'
import { MonthCalendar } from '@/components/MonthCalendar/MonthCalendar'
import { WeekCalendar } from '@/components/WeekCalendar'
import { useModalStore, useUiStore, useUserStore } from '@/store'

import styles from './styles.module.scss'

export const MainPage = () => {
	const { view } = useUiStore()
	const { eventId: modalEventId, isOpen: isModalOpen, onClose: onCloseModal } = useModalStore()
	const {
		user: { events },
		user,
		loadUser,
	} = useUserStore()

	const editingEvent = events.find((event) => event.id === modalEventId) ?? null

	const [date, setDate] = useState(dayjs())

	const handleSaveEvent = useCallback(
		async (eventData: Pick<EventDto, 'date' | 'time' | 'emoji' | 'text'>) => {
			onCloseModal()

			if (modalEventId) {
				await toast.promise(api.events.update(modalEventId, eventData), {
					success: 'Событие успешно обновлено',
					error: 'Произошла ошибка при обновлении события',
				})
			} else {
				console.log('create event for user:', user?.id)

				await toast.promise(api.events.create({ ...eventData, userId: user?.id! }), {
					success: 'Событие успешно создано',
					error: 'Произошла ошибка при создании события',
				})
			}

			loadUser(user?.id ?? 0)
		},
		[modalEventId, onCloseModal, loadUser, user]
	)

	const handleDeleteEvent = useCallback(
		async (eventId: Events.List.ResponseBody[number]['id']) => {
			await api.events.delete(eventId)

			onCloseModal()

			loadUser(user?.id!)
		},
		[onCloseModal, loadUser, user]
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
