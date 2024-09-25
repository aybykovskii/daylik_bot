import { Request, Response } from 'express'
import { z } from 'zod'

import {
	BodyRequest,
	CreatePaymentArg,
	ErrorResponse,
	ModelId,
	ParamsRequest,
	Payment,
	modelId,
	paymentBase,
} from 'shared/types'

import { PaymentModel } from '@models/payment'

import { Controller, Method, Route, ValidateBody, ValidateParams } from '../metadata'

@Controller('/payments')
export class PaymentsController {
	@Route('/')
	getPayments = async (_req: Request, res: Response<Payment[]>) => {
		res.json((await PaymentModel.findAll()).map((payment) => payment.asPaymentInfo()))
	}

	@Route('/')
	@Method('post')
	@ValidateBody(paymentBase.pick({ amount: true, userId: true }))
	createPayment = async (
		req: BodyRequest<CreatePaymentArg>,
		res: Response<Payment | ErrorResponse>
	) => {
		const { asPaymentInfo } = await PaymentModel.create(req.body)

		res.status(201).json(asPaymentInfo())
	}

	@Route('/:id')
	@ValidateParams(z.object({ id: modelId }))
	getPayment = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<Payment | ErrorResponse>
	) => {
		const payment = await PaymentModel.findByPk(req.params.id)

		if (!payment) {
			res.status(404).json({ error: req.t('server.error.payments.not_found') })
			return
		}

		res.json(payment.asPaymentInfo())
	}

	@Route('/:id/success')
	@Method('post')
	@ValidateParams(z.object({ id: modelId }))
	paymentSuccess = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<Payment | ErrorResponse>
	) => {
		const payment = await PaymentModel.findByPk(req.params.id)

		if (!payment) {
			res.status(404).json({ error: req.t('server.error.payments.not_found') })
			return
		}

		const updatedPayment = await payment.update({ status: 'success' })

		res.json(updatedPayment.asPaymentInfo())
	}

	@Route('/:id/failed')
	@Method('post')
	@ValidateParams(z.object({ id: modelId }))
	paymentFailed = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<Payment | ErrorResponse>
	) => {
		const payment = await PaymentModel.findByPk(req.params.id)

		if (!payment) {
			res.status(404).json({ error: req.t('server.error.payments.not_found') })
			return null
		}

		const updatedPayment = await payment.update({ status: 'failed' })

		res.json(updatedPayment.asPaymentInfo())
	}
}
