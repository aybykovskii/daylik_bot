import { Op } from '@sequelize/core'
import { CronJob } from 'cron'
import dayjs from 'dayjs'

import { EventModel, UserModel } from '@/db'

export const notificationsJob = new CronJob('* * * * *', async () => {
  console.log('Notifications job')

  const users = await UserModel.findAll()
  const events = await EventModel.findAll({
    where: {
      notificationDatetime: {
        [Op.between]: [dayjs().startOf('day').toDate(), dayjs().endOf('day').toDate()],
      },
    },
    attributes: ['userId', 'text', 'date', 'time', 'emoji', 'notificationDatetime', 'datetime'],
  })

  console.log({ time: dayjs().toDate(), events: events.map((event) => event.asDto()) })

  const eventsByUserId = events.reduce(
    (acc, event) => {
      acc[event.userId] ||= []
      acc[event.userId].push(event)
      return acc
    },
    {} as Record<string, EventModel[]>
  )

  // const messagesByTelegramUserId = Object.entries(eventsByUserId).reduce((acc, [userId, events]) => {
  // 	const eventsText = events.map((event) => `${event.time} ${event.emoji} ${event.text}`).join('\n')
  // 	const telegramUserId = users.find((user) => user.id.toString() === userId)?.telegramUserId!

  // 	acc[telegramUserId] = `Список событий на сегодня:\n${eventsText}`

  //   return acc
  // }, {} as Record<string, string>)

  const messagesByTelegramUserId = Object.entries(eventsByUserId).reduce(
    (acc, [userId, events]) => {
      const eventsText = events.map((event) => `в ${event.time} - ${event.emoji} ${event.text}`).join('\n')
      const telegramUserId = users.find((user) => user.id.toString() === userId)?.telegramUserId!

      acc[telegramUserId] = `Не забудь, напоминаю:\n${eventsText}`

      return acc
    },
    {} as Record<string, string>
  )

  fetch('http://telegram_bot:3030/notifications', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: Object.values(messagesByTelegramUserId),
      userIds: Object.keys(messagesByTelegramUserId),
    }),
  })

  console.log(messagesByTelegramUserId)
})
