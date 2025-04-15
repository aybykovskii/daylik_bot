import { Result, ResultAsync, ok } from 'neverthrow'
import { err } from 'neverthrow'

import { SubscriptionModel } from '@/db'
import { Errors } from '@/types/common'
import { SubscriptionFullData } from '@/types/subscriptions'

import { CreateSubscriptionDto, SubscriptionError, UpdateSubscriptionDto } from './subscriptions.types'

export class SubscriptionsService {
  model = SubscriptionModel

  read = async (
    id: number
  ): Promise<Result<SubscriptionFullData, Errors<typeof SubscriptionError, 'DoesNotExist'>>> => {
    const subscription = await this.model.findByPk(id)

    if (!subscription) {
      return err('ERR_SUBSCRIPTION_DOES_NOT_EXIST')
    }

    return ok(await subscription.asFullData())
  }

  create = async ({
    userId,
    ...dates
  }: CreateSubscriptionDto): Promise<
    Result<SubscriptionFullData, Errors<typeof SubscriptionError, 'AlreadyExists'>>
  > => {
    const [subscription, created] = await this.model.findOrCreate({ where: { userId }, defaults: { userId, ...dates } })

    if (!created) {
      return err('ERR_SUBSCRIPTION_ALREADY_EXISTS')
    }

    return ok(await subscription.asFullData())
  }

  update = async (
    id: number,
    dto: UpdateSubscriptionDto
  ): Promise<Result<SubscriptionFullData, Errors<typeof SubscriptionError, 'DoesNotExist' | 'UpdateFailed'>>> => {
    const subscription = await this.model.findByPk(id)

    if (!subscription) {
      return err('ERR_SUBSCRIPTION_DOES_NOT_EXIST')
    }

    const updatedSubscription = await ResultAsync.fromPromise(
      subscription.update({
        ...dto,
        startDate: dto.startDate ? new Date(dto.startDate) : undefined,
        endDate: dto.endDate ? new Date(dto.endDate) : undefined,
      }),
      (err) => err
    )

    if (updatedSubscription.isErr()) {
      return err('ERR_SUBSCRIPTION_UPDATE_FAILED')
    }

    return ok(await subscription.asFullData())
  }

  delete = async (id: number): Promise<Result<void, Errors<typeof SubscriptionError, 'DoesNotExist'>>> => {
    const subscription = await this.model.findByPk(id)

    if (!subscription) {
      return err('ERR_SUBSCRIPTION_DOES_NOT_EXIST')
    }

    await subscription.destroy()

    return ok()
  }
}

export const subscriptionsService = new SubscriptionsService()
