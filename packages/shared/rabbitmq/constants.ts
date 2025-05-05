import { env } from '../environment'

export const CONNECT_URL = `amqp://${env.RABBITMQ_DEFAULT_USER}:${env.RABBITMQ_DEFAULT_PASS}@rabbitmq:5672`

export const NOTIFICATION_QUEUE = 'notifications'
