import { BadRequestError, NotFoundError, Service } from '@common'

import { CreateStatisticsDto, StatisticsDto, StatisticsFullData, UpdateStatisticsDto } from 'shared'

import { DbService } from '../db'

@Service({ name: 'statisticsService', services: [DbService] })
export class StatisticsService {
	constructor(private readonly dbService: DbService) {}

	async find<
		IsInternal extends boolean,
		Result = IsInternal extends true ? DbService['StatisticsModel'] : StatisticsFullData,
	>(id: number, isInternal?: IsInternal): Promise<Result> {
		const statistics = await this.dbService.statistics.findByPk(id)

		if (!statistics) {
			throw new NotFoundError('server.error.statistics.not_found')
		}

		return (isInternal ? statistics : statistics.asFullData()) as Result
	}

	get = async (id: number): Promise<StatisticsFullData> => this.find(id)

	create = async (dto: CreateStatisticsDto): Promise<StatisticsDto> => {
		const statistics = await this.dbService.statistics.findOne({
			where: { userId: dto.userId },
		})

		if (statistics) {
			throw new BadRequestError('server.error.statistics.already_exists')
		}

		const newStatistics = await this.dbService.statistics.create(dto)

		return newStatistics.asDto()
	}

	update = async (id: number, dto: UpdateStatisticsDto): Promise<StatisticsFullData> => {
		const statistics = await this.find(id, true)

		await statistics.update(dto)

		return statistics.asFullData()
	}

	incrementSentRequestsCount = async (id: number): Promise<StatisticsFullData> => {
		const statistics = await this.find(id, true)

		const result = await statistics.increment('sentRequestsCount', { by: 1 })

		return result.asFullData()
	}

	delete = async (id: number): Promise<void> => {
		const statistics = await this.find(id, true)

		await statistics.destroy()
	}
}
