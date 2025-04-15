import { Transaction } from '@sequelize/core'
import { Ok, Result, err, ok } from 'neverthrow'

import { EventDraftModel } from '@/db'
import { Errors } from '@/types/common'
import { EventDraftDto, EventDraftFullData } from '@/types/event-drafts'

import { CreateEventDraftDto, EventDraftsError, UpdateEventDraftDto } from './event-drafts.types'

export class EventDraftsService {
  model = EventDraftModel

  readAll = async (): Promise<Ok<EventDraftDto[], never>> => {
    const drafts = await this.model.findAll()

    return ok(drafts.map((draft) => draft.asDto()))
  }

  read = async (id: number): Promise<Result<EventDraftFullData, Errors<typeof EventDraftsError, 'DoesNotExist'>>> => {
    const draft = await this.model.findByPk(id)

    if (!draft) {
      return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
    }

    return ok(await draft.asFullData())
  }

  create = async (dto: CreateEventDraftDto): Promise<Ok<EventDraftFullData, never>> => {
    const draft = await this.model.create(dto)

    return ok(await draft.asFullData())
  }

  update = async (
    id: number,
    dto: UpdateEventDraftDto
  ): Promise<Result<EventDraftFullData, Errors<typeof EventDraftsError, 'DoesNotExist'>>> => {
    const draft = await this.model.findByPk(id)

    if (!draft) {
      return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
    }

    await draft.update(dto)

    return ok(await draft.asFullData())
  }

  delete = async (
    id: number,
    transaction?: Transaction
  ): Promise<Result<void, Errors<typeof EventDraftsError, 'DoesNotExist'>>> => {
    const draft = await this.model.findByPk(id, { transaction })

    if (!draft) {
      return err('ERR_EVENT_DRAFT_DOES_NOT_EXIST')
    }

    await draft.destroy()

    return ok()
  }
}

export const eventDraftsService = new EventDraftsService()
