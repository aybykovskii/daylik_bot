import { MyOmit } from '../common'
import { EventBase } from './event'

export type CreateEventArg = MyOmit<EventBase, 'period'>
export type UpdateEventArg = Partial<MyOmit<EventBase, 'period'>>
