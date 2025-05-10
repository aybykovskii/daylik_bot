import { Op } from '@sequelize/core'
import { CronJob } from 'cron'
import dayjs from 'dayjs'

import { isUserSubscribed, notificationsService } from 'shared'

import { eventsService, usersService } from '@/modules'
import { EventDto } from '@/types/events'

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

  for (const [userId, events] of Object.entries(eventsByUserId)) {
    const user = users.find((user) => user.id === +userId)

    if (!user || !isUserSubscribed(user)) {
      continue
    }

    const eventsText = events.map((event) => `${event.time} ${event.emoji} ${event.text}`).join('\n')

    notificationsService.send({
      message: `Напоминаю, скоро:\n${eventsText}`,
      telegramUserId: user.telegramUserId,
    })
  }
})
