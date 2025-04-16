import dayjs from 'dayjs'

import { Events } from 'api'

export type WeekDayOption = {
  date: dayjs.Dayjs
  dateEvents: Events.GetAll.ResponseBody
  dateString: string
  hasEvents: boolean
}
