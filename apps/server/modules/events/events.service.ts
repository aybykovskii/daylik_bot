import { WhereOptions } from '@sequelize/core'
import dayjs from 'dayjs'
import { Ok, Result, err, ok } from 'neverthrow'

import { getUserDate } from 'shared'

import { EventModel } from '@/db'
import { eventDraftsService } from '@/modules/event-drafts'
import { Errors } from '@/types/common'
import { EventDto } from '@/types/events'

import { usersService } from '../users'

import { CreateEventDto, EventFullData, EventsError, UpdateEventDto } from './events.types'

export class EventsService {
  model = EventModel

  private async getTimestamps(userId: number, date: string, time: string | null) {
    const user = await usersService.read(userId)

    if (user.isErr()) {
      throw new Error('ERR_USER_DOES_NOT_EXIST')
    }

    const diff = user.value?.settings.UTCTimeDiff ?? 0
    const eventDate = dayjs(`${date} ${time ?? '00:00'}`)
    const datetime = getUserDate(diff, eventDate)

    return {
      datetime: datetime.toISOString(),
      notificationDatetime: datetime.subtract(1, 'hour').toISOString(),
    }
  }

  readAll = async (opts?: { where?: WhereOptions<EventModel> }): Promise<Ok<EventDto[], never>> => {
    const events = await this.model.findAll({ where: opts?.where })

    return ok(events.map((event) => event.asDto()))
  }

  read = async (id: number): Promise<Result<EventFullData, Errors<typeof EventsError, 'DoesNotExist'>>> => {
    const event = await this.model.findByPk(id)

    if (!event) {
      return err('ERR_EVENT_DOES_NOT_EXIST')
    }

    return ok(await event.asFullData())
  }

  create = async (
    dto: CreateEventDto
  ): Promise<Result<EventFullData, Errors<typeof EventsError, 'DraftDoesNotExist' | 'InvalidData'>>> => {
    if ('copyFromId' in dto) {
      const eventDraft = await eventDraftsService.read(dto.copyFromId)

      if (eventDraft.isErr()) {
        return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
      }

      const { id, createdAt, updatedAt, ...data } = eventDraft.value

      const event = await this.model.sequelize.transaction(async (transaction) => {
        const event = await this.model.create(
          {
            ...data,
            ...(await this.getTimestamps(data.userId, data.date, data.time)),
          },
          { transaction }
        )

        const result = await eventDraftsService.delete(dto.copyFromId, transaction)

        if (result.isErr()) {
          transaction.rollback()
          return err(result.error)
        }

        return ok(event)
      })

      if (event.isErr()) {
        return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
      }

      return ok(await event.value.asFullData())
    }

    const event = await this.model.create({
      ...dto,
      ...(await this.getTimestamps(dto.userId, dto.date, dto.time)),
    })

    return ok(await event.asFullData())
  }

  update = async (
    id: number,
    dto: UpdateEventDto
  ): Promise<Result<EventFullData, Errors<typeof EventsError, 'DoesNotExist' | 'InvalidData'>>> => {
    const event = await this.model.findByPk(id)

    if (!event) {
      return err('ERR_EVENT_DOES_NOT_EXIST')
    }

    console.log('update', { event, dto })

    await event.update({
      ...dto,
      ...(dto.date || dto.time
        ? await this.getTimestamps(event.userId, dto.date ?? event.date, dto.time ?? event.time)
        : {}),
    })

    return ok(await event.asFullData())
  }

  delete = async (id: number): Promise<Result<void, Errors<typeof EventsError, 'DoesNotExist'>>> => {
    const event = await this.model.findByPk(id)

    if (!event) {
      return err('ERR_EVENT_DOES_NOT_EXIST')
    }

    await event.destroy()

    return ok()
  }
}

export const eventsService = new EventsService()
