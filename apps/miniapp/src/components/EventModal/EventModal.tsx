import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import { Events } from 'api'
import { DATE_FORMAT } from 'shared/time'

import styles from './styles.module.scss'

type Props = {
  event: Events.GetAll.ResponseBody[number] | null
  onSave: (event: Events.PatchById.RequestBody) => void
  onDelete: (id: Events.GetAll.ResponseBody[number]['id']) => void
}

export const EventModal = ({ event, onSave, onDelete }: Props) => {
  const modalElement = document.getElementById('modal')

  const [date, setDate] = useState(dayjs(event?.date.replaceAll('.', '-')))
  const [time, setTime] = useState(event?.time ?? '12:00')
  const [isAllDay, setIsAllDay] = useState(event ? !event?.time : false)
  const [emoji, setEmoji] = useState(event?.emoji ?? '😀')
  const [isEmojiSelectorOpen, setIsEmojiSelectorOpen] = useState(false)
  const [text, setText] = useState(event?.text ?? '')

  const handleSave = () => {
    const datetime = dayjs(`${date.format(DATE_FORMAT)} ${time ?? '00:00'}`)

    const updatedEvent: Events.PatchById.RequestBody = {
      date: date.format(DATE_FORMAT),
      time: isAllDay ? null : time,
      emoji,
      text,
      datetime: datetime.toISOString(),
      notificationDatetime: datetime.subtract(1, 'hour').toISOString(),
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
              onChange={(e) => setDate(dayjs(e.target.value))}
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
            <input
              type="checkbox"
              checked={isAllDay}
              onChange={(e) => setIsAllDay(e.target.checked)}
            />
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
            <button
              data-action="delete"
              onClick={() => onDelete(event.id)}
            >
              Удалить
            </button>
          )}
          <button
            data-name="primary"
            onClick={handleSave}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>,
    modalElement
  )
}
