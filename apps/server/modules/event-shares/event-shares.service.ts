import { Ok, Result, ResultAsync, err, ok } from 'neverthrow'

import { EventSharingModel } from '@/db'
import { Errors } from '@/types/common'
import { EventSharingDto, EventSharingFullData } from '@/types/event-shares'

import { CreateEventSharingDto, EventSharesError, UpdateEventSharingDto } from './event-shares.types'

export class EventSharesService {
  model = EventSharingModel

  readAll = async (): Promise<Ok<EventSharingDto[], never>> => {
    const shares = await this.model.findAll()

    return ok(shares.map((sharing) => sharing.asDto()))
  }

  read = async (
    uuid: string
  ): Promise<Result<EventSharingFullData, Errors<typeof EventSharesError, 'DoesNotExist'>>> => {
    const sharing = await this.model.findByPk(uuid)

    if (!sharing) {
      return err('ERR_EVENT_SHARING_DOES_NOT_EXIST')
    }

    return ok(await sharing.asFullData())
  }

  create = async (
    dto: CreateEventSharingDto
  ): Promise<Result<EventSharingFullData, Errors<typeof EventSharesError, 'InvalidData'>>> => {
    const sharing = await ResultAsync.fromPromise(this.model.create(dto), (err) => err)

    if (sharing.isErr()) {
      return err('ERR_EVENT_SHARING_INVALID_DATA')
    }

    return ok(await sharing.value.asFullData())
  }

  update = async (
    uuid: string,
    dto: UpdateEventSharingDto
  ): Promise<Result<EventSharingFullData, Errors<typeof EventSharesError, 'DoesNotExist' | 'InvalidData'>>> => {
    const sharing = await this.model.findByPk(uuid)

    if (!sharing) {
      return err('ERR_EVENT_SHARING_DOES_NOT_EXIST')
    }

    await sharing.update(dto)

    return ok(await sharing.asFullData())
  }

  delete = async (uuid: string): Promise<Result<void, Errors<typeof EventSharesError, 'DoesNotExist'>>> => {
    const sharing = await this.model.findByPk(uuid)

    if (!sharing) {
      return err('ERR_EVENT_SHARING_DOES_NOT_EXIST')
    }

    await sharing.destroy()

    return ok()
  }
}

export const eventSharesService = new EventSharesService()
