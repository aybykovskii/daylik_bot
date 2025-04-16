import dayjs from 'dayjs'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { CSSTransition } from 'react-transition-group'

import { Events, api } from 'api'

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
    async (eventData: Events.PatchById.RequestBody) => {
      onCloseModal()

      if (modalEventId) {
        await toast.promise(api.events.patchById(modalEventId, eventData), {
          success: 'Событие успешно обновлено',
          error: 'Произошла ошибка при обновлении события',
        })
      } else {
        await toast.promise(api.events.post({ ...eventData, userId: user?.id! }), {
          success: 'Событие успешно создано',
          error: 'Произошла ошибка при создании события',
        })
      }

      loadUser(user?.id ?? 0)
    },
    [modalEventId, onCloseModal, loadUser, user]
  )

  const handleDeleteEvent = useCallback(
    async (eventId: Events.GetById.ResponseBody['id']) => {
      await api.events.deleteById(eventId)

      onCloseModal()

      loadUser(user?.id!)
    },
    [onCloseModal, loadUser, user]
  )

  return (
    <div>
      <CalendarHeader
        date={date}
        onSetNow={() => setDate(dayjs())}
      />

      <section className={styles.section}>
        {view === 'month' ? (
          <MonthCalendar
            date={date}
            setDate={setDate}
            events={events}
          />
        ) : (
          <WeekCalendar
            date={date}
            setDate={setDate}
            events={events}
          />
        )}
      </section>

      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <EventModal
          event={editingEvent}
          onDelete={handleDeleteEvent}
          onSave={handleSaveEvent}
        />
      </CSSTransition>
    </div>
  )
}
