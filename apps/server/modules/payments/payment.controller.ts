import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import {
	CreatePaymentDto,
	ParamsId,
	ParamsUuid,
	PaymentFullDataResponseDto,
	PaymentsResponseDto,
	UpdatePaymentDto,
	createPaymentDto,
	paramsId,
	paramsUuid,
	paymentFullDataResponseDto,
	paymentsResponseDto,
	updatePaymentDto,
} from 'shared'

import { Controller, Delete, Get, Patch, Post, Validate } from '@common'

import { PaymentsService } from './payments.service'

@Controller('/payments', [PaymentsService])
export class PaymentsController {
	constructor(private readonly paymentService: PaymentsService) {}

	@Get('/users/:id')
	@Validate({
		params: paramsId,
		response: {
			200: paymentsResponseDto,
		},
	})
	async getUserPayments(
		{ params }: FastifyRequest<{ Params: ParamsId }>,
		reply: FastifyReply<{ Body: PaymentsResponseDto }>
	) {
		const payments = await this.paymentService.findAllByUserId(params.id)

		reply.status(200).send(payments)
	}

	@Post('/')
	@Validate({
		body: createPaymentDto,
		response: {
			201: paymentFullDataResponseDto,
		},
	})
	async createPayment(
		{ body }: FastifyRequest<{ Body: CreatePaymentDto }>,
		reply: FastifyReply<{ Body: PaymentFullDataResponseDto }>
	) {
		const payment = await this.paymentService.create(body)

		reply.status(201).send(payment)
	}

	@Get('/:uuid')
	@Validate({
		params: paramsUuid,
		response: {
			200: paymentFullDataResponseDto,
		},
	})
	async getPayment(
		{ params }: FastifyRequest<{ Params: ParamsUuid }>,
		reply: FastifyReply<{ Body: PaymentFullDataResponseDto }>
	) {
		const payment = await this.paymentService.findOne(params.uuid)

		reply.status(200).send(payment)
	}

	@Patch('/:uuid')
	@Validate({
		params: paramsUuid,
		body: updatePaymentDto,
		response: {
			200: paymentFullDataResponseDto,
		},
	})
	async updatePayment(
		{ params, body }: FastifyRequest<{ Params: ParamsUuid; Body: UpdatePaymentDto }>,
		reply: FastifyReply<{ Body: PaymentFullDataResponseDto }>
	) {
		const payment = await this.paymentService.update(params.uuid, body)

		console.log({ payment })

		reply.status(200).send(payment)
	}

	@Delete('/:uuid')
	@Validate({
		params: paramsUuid,
		response: {
			204: z.undefined().openapi({
				type: 'null',
			}),
		},
	})
	async deletePayment({ params }: FastifyRequest<{ Params: ParamsUuid }>, reply: FastifyReply) {
		await this.paymentService.delete(params.uuid)

		reply.status(204).send()
	}
}
