import dayjs, { Dayjs } from 'dayjs'

import { ONE_HOUR } from './constants'

export const makeUTCTimeDiff = (mins: number) => mins / ONE_HOUR

export const getUserDate = (diff: number, date?: Dayjs) => (date ?? dayjs()).add(-diff, 'hour')

export const makeUserDate = (diff: number, date?: Dayjs) => (date ?? dayjs()).add(diff, 'hour')

export const getTimeSorted = <T extends { time: string | null }>(items: T[]): T[] =>
  items.toSorted((a, b) => {
    if (!a.time) return -1
    if (!b.time) return 1

    if (a.time < b.time) return -1
    if (a.time > b.time) return 1

    return 0
  })
