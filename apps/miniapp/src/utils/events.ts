import dayjs from 'dayjs'

import { Events } from 'api'
import { DATE_FORMAT } from 'shared/time'

export const getSortedDayEvents = (events: Events.GetAll.ResponseBody, date: dayjs.Dayjs) =>
  events
    .filter((event) => event.date === date.format(DATE_FORMAT))
    .toSorted((a, b) => {
      if (!a.time) return -1
      if (!b.time) return 1

      if (a.time < b.time) return -1
      if (a.time > b.time) return 1

      return 0
    })
