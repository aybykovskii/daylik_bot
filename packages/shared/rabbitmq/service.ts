import { Channel, ChannelModel, connect } from 'amqplib'

import { commonLogger } from '../logger'

import { CONNECT_URL, NOTIFICATION_QUEUE } from './constants'
import { EventNotification } from './types'

export class RabbitMQService<Msg extends object> {
  private connection!: ChannelModel
  private channel!: Channel
  private readonly url: string
  private readonly queueName: string

  constructor(rabbitUrl: string, queueName: string) {
    this.url = rabbitUrl
    this.queueName = queueName
  }

  private async connect() {
    this.connection = await connect(this.url)
    this.channel = await this.connection.createChannel()
    commonLogger.info('[RabbitMQ] Connected and channel created')
  }

  private async assertQueue() {
    await this.channel.assertQueue(this.queueName, { durable: true })
    commonLogger.info(`[RabbitMQ] Queue asserted: ${this.queueName}`)
  }

  async init() {
    await this.connect()
    await this.assertQueue()

    return this
  }

  async send(msg: Msg): Promise<void> {
    const buffer = Buffer.from(JSON.stringify(msg))
    this.channel.sendToQueue(this.queueName, buffer, { persistent: true })
  }

  async consume(onMessage: (msg: Msg) => void) {
    return this.channel.consume(this.queueName, (msg) => {
      if (msg !== null) {
        const content = JSON.parse(msg.content.toString())
        try {
          onMessage(content)
          this.channel.ack(msg)
        } catch (error) {
          commonLogger.error(`Failed to proceed message`, { error })
        }
      }
    })
  }

  async close(): Promise<void> {
    await this.channel.close()
    await this.connection.close()
    commonLogger.info('[RabbitMQ] Connection closed.')
  }
}

export const notificationsService = new RabbitMQService<EventNotification>(CONNECT_URL, NOTIFICATION_QUEUE)
