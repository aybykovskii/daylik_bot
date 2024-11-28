import { BadRequestError, NotFoundError, Service } from '@common'

import {
	CreateSubscriptionDto,
	SubscriptionDto,
	SubscriptionFullData,
	UpdateSubscriptionDto,
} from 'shared'

import { DbService } from '../db'

@Service({ name: 'subscriptionsService', services: [DbService] })
export class SubscriptionsService {
	constructor(private readonly dbService: DbService) {}

	async find<
		IsInternal extends boolean,
		Result = IsInternal extends true ? DbService['SubscriptionModel'] : SubscriptionFullData,
	>(id: number, isInternal?: IsInternal): Promise<Result> {
		const subscription = await this.dbService.statistics.findByPk(id)

		if (!subscription) {
			throw new NotFoundError('server.error.subscriptions.not_found')
		}

		return (isInternal ? subscription : subscription.asFullData()) as Result
	}

	get = async (id: number): Promise<SubscriptionFullData> => this.find(id)

	create = async ({ userId }: CreateSubscriptionDto): Promise<SubscriptionDto> => {
		const subscription = await this.dbService.subscription.findOne({ where: { userId } })

		if (subscription) {
			throw new BadRequestError('server.error.subscriptions.already_exists')
		}

		const newSubscription = await this.dbService.subscription.create({ userId })

		return newSubscription.asDto()
	}

	update = async (id: number, dto: UpdateSubscriptionDto): Promise<SubscriptionFullData> => {
		const subscription = await this.find(id, true)

		await subscription.update(dto)

		return subscription.asFullData()
	}

	delete = async (id: number): Promise<void> => {
		const subscription = await this.find(id, true)

		await subscription.destroy()
	}
}
