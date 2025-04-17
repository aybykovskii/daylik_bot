import { Op } from '@sequelize/core'
import { CronJob } from 'cron'
import dayjs from 'dayjs'

import { DAILY_NOTIFICATION_TIME, getTimeSorted, getUserDate } from 'shared'

import { eventsService, usersService } from '@/modules'
import { EventDto } from '@/types/events'

import { botRequest } from '../request'

export const dailyNotificationJob = new CronJob('0 */30 * * * *', async () => {
  const users = await usersService._readAll()
  const { value: events } = await eventsService.readAll({
    where: {
      datetime: {
        [Op.gte]: dayjs().startOf('day').toDate(),
      },
    },
  })

  const eventsByUserId = events.reduce(
    (acc, event) => {
      acc[event.userId] ||= []
      acc[event.userId].push(event)
      return acc
    },
    {} as Record<number, EventDto[]>
  )

  const eventToNotifyByUserId = Object.entries(eventsByUserId).reduce(
    (acc, [userId, events]) => {
      const user = users.find((user) => user.id === +userId)

      const diff = user?.settings.UTCTimeDiff ?? 0
      const userDate = getUserDate(diff)

      if (!user || userDate.hour() !== DAILY_NOTIFICATION_TIME) {
        return acc
      }

      const userStartOfDay = getUserDate(diff, dayjs().startOf('day'))
      const userEndOfDay = getUserDate(diff, dayjs().endOf('day'))

      const eventsToNotify = getTimeSorted(events).filter(
        (event) => dayjs(event.datetime).isAfter(userStartOfDay) && dayjs(event.datetime).isBefore(userEndOfDay)
      )

      if (!eventsToNotify.length) {
        return acc
      }

      const eventsText = eventsToNotify.map((event) => `${event.time} ${event.emoji} ${event.text}`).join('\n')

      acc[user.telegramUserId] = `Список событий на сегодня:\n${eventsText}`
      return acc
    },
    {} as Record<string, string>
  )

  if (!Object.keys(eventToNotifyByUserId).length) return

  botRequest('POST', 'notifications', {
    message: Object.values(eventToNotifyByUserId),
    userIds: Object.keys(eventToNotifyByUserId),
  })
})
