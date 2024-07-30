import { Request, Response } from 'express'

import {
	BodyRequest,
	CreatePaymentArg,
	ErrorResponse,
	ModelId,
	ParamsRequest,
	Payment,
	paymentBase,
} from '~types'

import { PaymentModel } from '@models/payment'
import { Controller, Method, Route, Validate } from '../metadata'

@Controller('/payments')
export class PaymentsController {
	@Route('/')
	getPayments = async (_req: Request, res: Response<Payment[]>) => {
		res.json((await PaymentModel.findAll()).map((payment) => payment.asPaymentInfo()))
	}

	@Route('/')
	@Method('post')
	@Validate(paymentBase.pick({ amount: true, userId: true }))
	createPayment = async (
		req: BodyRequest<CreatePaymentArg>,
		res: Response<Payment | ErrorResponse>
	) => {
		const { asPaymentInfo } = await PaymentModel.create(req.body)

		res.status(201).json(asPaymentInfo())
	}

	@Route('/:id')
	getPayment = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<Payment | ErrorResponse>
	) => {
		const payment = await PaymentModel.findByPk(req.params.id)

		if (!payment) {
			res.status(404).json({ error: 'Payment not found' })
			return
		}

		res.json(payment.asPaymentInfo())
	}

	@Route('/:id/success')
	@Method('post')
	paymentSuccess = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<Payment | ErrorResponse>
	) => {
		const payment = await PaymentModel.findByPk(req.params.id)

		if (!payment) {
			res.status(404).json({ error: 'Payment not found' })
			return
		}

		const updatedPayment = await payment.update({ status: 'success' })

		res.json(updatedPayment.asPaymentInfo())
	}

	@Route('/:id/failed')
	@Method('post')
	paymentFailed = async (
		req: ParamsRequest<{ id: ModelId }>,
		res: Response<Payment | ErrorResponse>
	) => {
		const payment = await PaymentModel.findByPk(req.params.id)

		if (!payment) {
			res.status(404).json({ error: 'Payment not found' })
			return null
		}

		const updatedPayment = await payment.update({ status: 'failed' })

		res.json(updatedPayment.asPaymentInfo())
	}
}
