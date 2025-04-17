import dayjs from 'dayjs'

import { Payments } from '../../api'

import { REFUND_PERIOD } from './constants'

export const getIsPaymentRefundable = ({ type, status, updatedAt }: Payments.GetByUuid.ResponseBody) =>
  type === 'subscription' && status === 'success' && dayjs().diff(dayjs(updatedAt), 'days') < REFUND_PERIOD
