import { Ok, Result, err, ok } from 'neverthrow'

import { PaymentModel } from '@/db'
import { PaymentDto, PaymentFullData } from '@/types/payments'

import { CreatePaymentDto, PaymentsError, ReadAllPaymentsArg, UpdatePaymentDto } from './payments.types'

export class PaymentsService {
  model = PaymentModel

  readAll = async ({ userId }: ReadAllPaymentsArg): Promise<Ok<PaymentDto[], never>> => {
    const payments = await this.model.findAll({ where: { userId } })

    return ok(payments.map((payment) => payment.asDto()))
  }

  read = async (uuid: string): Promise<Result<PaymentFullData, PaymentsError>> => {
    const payment = await this.model.findByPk(uuid)

    if (!payment) {
      return err('ERR_PAYMENT_DOES_NOT_EXIST')
    }

    return ok(await payment.asFullData())
  }

  create = async (dto: CreatePaymentDto): Promise<Result<PaymentFullData, PaymentsError>> => {
    const payment = await this.model.create(dto)

    return ok(await payment.asFullData())
  }

  update = async (uuid: string, dto: UpdatePaymentDto): Promise<Result<PaymentFullData, PaymentsError>> => {
    const payment = await this.model.findByPk(uuid)

    if (!payment) {
      return err('ERR_PAYMENT_DOES_NOT_EXIST')
    }

    const updatedPayment = await payment.update(dto)

    return ok(await updatedPayment.asFullData())
  }

  delete = async (uuid: string): Promise<Result<void, PaymentsError>> => {
    const payment = await this.model.findByPk(uuid)

    if (!payment) {
      return err('ERR_PAYMENT_DOES_NOT_EXIST')
    }

    await payment.destroy()

    return ok()
  }
}

export const paymentsService = new PaymentsService()
