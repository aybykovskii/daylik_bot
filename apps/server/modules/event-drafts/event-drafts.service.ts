import { Ok, Result, err, ok } from 'neverthrow'

import { EventDraftModel } from '@/db'
import { EventDraftDto, EventDraftFullData } from '@/types/event-drafts'
import { Transaction } from '@sequelize/core'

import { CreateEventDraftDto, EventDraftsError, UpdateEventDraftDto } from './event-drafts.types'

export class EventDraftsService {
  model = EventDraftModel

  readAll = async (): Promise<Ok<EventDraftDto[], never>> => {
    const drafts = await this.model.findAll()

    return ok(drafts.map((draft) => draft.asDto()))
  }

  read = async (id: number): Promise<Result<EventDraftFullData, EventDraftsError>> => {
    const draft = await this.model.findByPk(id)

    if (!draft) {
      return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
    }

    return ok(await draft.asFullData())
  }

  create = async (dto: CreateEventDraftDto): Promise<Result<EventDraftFullData, EventDraftsError>> => {
    const [draft, created] = await this.model.findOrCreate({ where: { userId: dto.userId }, defaults: dto })

    if (!created) {
      return err('ERR_EVENT_DRAFT_ALREADY_EXISTS')
    }

    return ok(await draft.asFullData())
  }

  update = async (id: number, dto: UpdateEventDraftDto): Promise<Result<EventDraftFullData, EventDraftsError>> => {
    const draft = await this.model.findByPk(id)

    if (!draft) {
      return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
    }

    await draft.update(dto)

    return ok(await draft.asFullData())
  }

  delete = async (id: number, transaction?: Transaction): Promise<Result<void, EventDraftsError>> => {
    const draft = await this.model.findByPk(id, { transaction })

    if (!draft) {
      return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
    }

    await draft.destroy()

    return ok()
  }
}

export const eventDraftsService = new EventDraftsService()
