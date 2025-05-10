import { Op } from '@sequelize/core'
import { CronJob } from 'cron'
import dayjs from 'dayjs'

import {
  DAILY_NOTIFICATION_TIME,
  getTimeSorted,
  getUserDate,
  isUserSubscribed,
  makeUserDate,
  notificationsService,
} from 'shared'

import { eventsService, usersService } from '@/modules'
import { EventDto } from '@/types/events'

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

  for (const [userId, events] of Object.entries(eventsByUserId)) {
    const user = users.find((user) => user.id === +userId)

    const diff = user?.settings.UTCTimeDiff ?? 0
    const userDate = getUserDate(diff)

    if (!user || !isUserSubscribed(user) || userDate.hour() !== DAILY_NOTIFICATION_TIME) {
      continue
    }

    const userStartOfDay = makeUserDate(diff, dayjs().startOf('day'))
    const userEndOfDay = makeUserDate(diff, dayjs().endOf('day'))

    const eventsToNotify = getTimeSorted(events).filter(
      (event) => dayjs(event.datetime).isAfter(userStartOfDay) && dayjs(event.datetime).isBefore(userEndOfDay)
    )

    if (!eventsToNotify.length) {
      continue
    }

    const eventsText = eventsToNotify.map((event) => `${event.time} ${event.emoji} ${event.text}`).join('\n')

    notificationsService.send({
      message: `Список событий на сегодня:\n${eventsText}`,
      telegramUserId: user.telegramUserId,
    })
  }
})
