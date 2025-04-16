import dayjs from 'dayjs'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { Events } from 'api'

import { useSwipe } from '@/hooks'
import { useModalStore } from '@/store'

import { MonthCalendarBody } from './MonthCalendarBody'
import styles from './styles.module.scss'

type Props = {
  date: dayjs.Dayjs
  setDate: (date: dayjs.Dayjs) => void
  events: Events.GetAll.ResponseBody
}

export const MonthCalendar = ({ date, setDate, events }: Props) => {
  const { onOpen, eventId: modalEventId } = useModalStore()

  const { ref, direction, time } = useSwipe({
    onLeft: () => setDate(date.add(1, 'month')),
    onRight: () => setDate(date.subtract(1, 'month')),
  })

  const localeDate = date.localeData()
  const firstDayOfWeek = localeDate.firstDayOfWeek()
  const weekDays = localeDate.weekdaysMin()
  const calendarWeekDays = [...weekDays.slice(firstDayOfWeek), ...weekDays.slice(0, firstDayOfWeek)]

  return (
    <table
      ref={ref}
      className={styles.monthCalendar}
    >
      <thead>
        <tr>
          {calendarWeekDays.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={date.format('YYYY-MM')}
          classNames={`swipe-${direction}`}
          timeout={time}
        >
          <MonthCalendarBody
            date={date}
            events={events}
            editingEventId={modalEventId}
            onEditEvent={onOpen}
          />
        </CSSTransition>
      </SwitchTransition>
    </table>
  )
}
