import dayjs from 'dayjs'
import { Ok, Result, err, ok } from 'neverthrow'

import { EventModel } from '@/db'
import { eventDraftsService } from '@/modules/event-drafts'
import { EventDto } from '@/types/events'

import { CreateEventDto, EventFullData, EventsError, UpdateEventDto } from './events.types'

export class EventsService {
  model = EventModel

  private getTimestamps(date: string, time: string | null) {
    const datetime = dayjs(`${date} ${time ?? '00:00'}`)

    return {
      datetime: datetime.toISOString(),
      notificationDatetime: datetime.subtract(1, 'hour').toISOString(),
    }
  }

  readAll = async (): Promise<Ok<EventDto[], never>> => {
    const events = await this.model.findAll()

    return ok(events.map((event) => event.asDto()))
  }

  read = async (id: number): Promise<Result<EventFullData, EventsError>> => {
    const event = await this.model.findByPk(id)

    if (!event) {
      return err('ERR_EVENT_DOES_NOT_EXIST')
    }

    return ok(await event.asFullData())
  }

  create = async (dto: CreateEventDto): Promise<Result<EventFullData, EventsError>> => {
    if ('copyFromId' in dto) {
      const eventDraft = await eventDraftsService.read(dto.copyFromId)

      if (eventDraft.isErr()) {
        return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
      }

      const { id: _, ...data } = eventDraft.value

      const event = await this.model.sequelize.transaction(async (transaction) => {
        const event = await this.model.create(
          {
            ...data,
            ...this.getTimestamps(data.date, data.time),
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
      ...this.getTimestamps(dto.date, dto.time),
    })

    return ok(await event.asFullData())
  }

  update = async (id: number, dto: UpdateEventDto): Promise<Result<EventFullData, EventsError>> => {
    const event = await this.model.findByPk(id)

    if (!event) {
      return err('ERR_EVENT_DOES_NOT_EXIST')
    }

    await event.update(dto)

    return ok(await event.asFullData())
  }

  delete = async (id: number): Promise<Result<void, EventsError>> => {
    const event = await this.model.findByPk(id)

    if (!event) {
      return err('ERR_EVENT_DOES_NOT_EXIST')
    }

    await event.destroy()

    return ok()
  }
}

export const eventsService = new EventsService()
