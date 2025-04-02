import { Result, ok } from 'neverthrow'
import { err } from 'neverthrow'

import { StatisticsModel } from '@/db'
import { StatisticsFullData } from '@/types/statistics'

import { StatisticsError } from './statistics.types'
import { CreateStatisticsDto, UpdateStatisticsDto } from './statistics.types'

export class StatisticsService {
  model = StatisticsModel

  read = async (id: number): Promise<Result<StatisticsFullData, StatisticsError>> => {
    const statistics = await this.model.findByPk(id)

    if (!statistics) {
      return err('ERR_STATISTICS_DOES_NOT_EXIST')
    }

    return ok(await statistics.asFullData())
  }

  create = async (dto: CreateStatisticsDto): Promise<Result<StatisticsFullData, StatisticsError>> => {
    const [statistics, created] = await this.model.findOrCreate({
      where: { userId: dto.userId },
      defaults: dto,
    })

    if (!created) {
      return err('ERR_STATISTICS_ALREADY_EXISTS')
    }

    return ok(await statistics.asFullData())
  }

  update = async (id: number, dto: UpdateStatisticsDto): Promise<Result<StatisticsFullData, StatisticsError>> => {
    const statistics = await this.model.findByPk(id)

    if (!statistics) {
      return err('ERR_STATISTICS_DOES_NOT_EXIST')
    }

    await statistics.update(dto)

    return ok(await statistics.asFullData())
  }

  incrementSentRequestsCount = async (id: number): Promise<Result<StatisticsFullData, StatisticsError>> => {
    const statistics = await this.model.findByPk(id)

    if (!statistics) {
      return err('ERR_STATISTICS_DOES_NOT_EXIST')
    }

    const result = await statistics.increment('sentRequestsCount', { by: 1 })

    return ok(await result.asFullData())
  }

  delete = async (id: number): Promise<Result<void, StatisticsError>> => {
    const statistics = await this.model.findByPk(id)

    if (!statistics) {
      return err('ERR_STATISTICS_DOES_NOT_EXIST')
    }

    await statistics.destroy()

    return ok()
  }
}

export const statisticsService = new StatisticsService()
