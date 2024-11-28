import { NotFoundError, Service } from '@common'
import { DbService } from '@modules'
import {
	CreatePaymentDto,
	PaymentFullData,
	PaymentFullDataResponseDto,
	PaymentsResponseDto,
	UpdatePaymentDto,
} from 'shared'

@Service({ name: 'payments', services: [DbService] })
export class PaymentsService {
	constructor(private readonly dbService: DbService) {}

	async find<
		IsInternal extends boolean,
		Result = IsInternal extends true ? DbService['PaymentModel'] : PaymentFullData,
	>(uuid: string, isInternal?: IsInternal): Promise<Result> {
		const payment = await this.dbService.payment.findByPk(uuid)

		if (!payment) {
			throw new NotFoundError('server.error.payments.not_found')
		}

		return (isInternal ? payment : payment.asDto()) as Result
	}

	findOne = async (uuid: string): Promise<PaymentFullData> => this.find(uuid)

	findAllByUserId = async (userId: number): Promise<PaymentsResponseDto> => {
		const payments = await this.dbService.payment.findAll({ where: { userId } })

		return payments.map((payment) => payment.asDto())
	}

	create = async (dto: CreatePaymentDto): Promise<PaymentFullDataResponseDto> => {
		const payment = await this.dbService.payment.create(dto)

		return payment.asFullData()
	}

	update = async (uuid: string, dto: UpdatePaymentDto): Promise<PaymentFullDataResponseDto> => {
		const payment = await this.find(uuid, true)

		const updatedPayment = await payment.update(dto)

		return updatedPayment.asFullData()
	}

	delete = async (uuid: string): Promise<void> => {
		const payment = await this.find(uuid, true)

		await payment.destroy()
	}
}
