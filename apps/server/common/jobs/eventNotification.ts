import { Op } from '@sequelize/core'
import { CronJob } from 'cron'
import dayjs from 'dayjs'

import { eventsService, usersService } from '@/modules'
import { EventDto } from '@/types/events'

import { botRequest } from '../request'

export const eventNotificationJob = new CronJob('0 * * * * *', async () => {
  const users = await usersService._readAll()

  const time = dayjs()

  const { value: events } = await eventsService.readAll({
    where: {
      notificationDatetime: {
        [Op.between]: [time.startOf('minute').toDate(), time.endOf('minute').toDate()],
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

      if (!user || user.subscription.status !== 'active') {
        return acc
      }

      const eventsText = events.map((event) => `${event.time} ${event.emoji} ${event.text}`).join('\n')

      acc[user.telegramUserId] = `Напоминаю, скоро:\n${eventsText}`
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
