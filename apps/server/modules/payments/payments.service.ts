import { Ok, Result, err, ok } from 'neverthrow'

import { PaymentModel } from '@/db'
import { Errors } from '@/types/common'
import { PaymentDto, PaymentFullData } from '@/types/payments'

import { CreatePaymentDto, PaymentsError, ReadAllPaymentsArg, UpdatePaymentDto } from './payments.types'

export class PaymentsService {
  model = PaymentModel

  readAll = async ({ userId }: ReadAllPaymentsArg): Promise<Ok<PaymentDto[], never>> => {
    const payments = await this.model.findAll({ where: { userId } })

    return ok(payments.map((payment) => payment.asDto()))
  }

  read = async (uuid: string): Promise<Result<PaymentFullData, Errors<typeof PaymentsError, 'DoesNotExist'>>> => {
    const payment = await this.model.findByPk(uuid)

    if (!payment) {
      return err('ERR_PAYMENT_DOES_NOT_EXIST')
    }

    return ok(await payment.asFullData())
  }

  create = async ({
    userId,
    amount,
    currency,
    description,
    provider,
    providerPaymentId,
  }: CreatePaymentDto): Promise<Result<PaymentFullData, never>> => {
    const payment = await this.model.create({ userId, amount, currency, description, provider, providerPaymentId })

    return ok(await payment.asFullData())
  }

  update = async (
    uuid: string,
    dto: UpdatePaymentDto
  ): Promise<Result<PaymentFullData, Errors<typeof PaymentsError, 'DoesNotExist'>>> => {
    const payment = await this.model.findByPk(uuid)

    if (!payment) {
      return err('ERR_PAYMENT_DOES_NOT_EXIST')
    }

    const updatedPayment = await payment.update(dto)

    return ok(await updatedPayment.asFullData())
  }

  delete = async (uuid: string): Promise<Result<void, Errors<typeof PaymentsError, 'DoesNotExist'>>> => {
    const payment = await this.model.findByPk(uuid)

    if (!payment) {
      return err('ERR_PAYMENT_DOES_NOT_EXIST')
    }

    await payment.destroy()

    return ok()
  }
}

export const paymentsService = new PaymentsService()
