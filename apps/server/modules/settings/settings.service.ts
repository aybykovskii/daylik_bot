import { BadRequestError, NotFoundError, Service } from 'common'

import { SettingsDto, SettingsFullData, CreateSettingsDto, UpdateSettingsDto } from 'shared'

import { DbService } from '../db'

@Service({ name: 'settingsService', services: [DbService] })
export class SettingsService {
	constructor(private readonly dbService: DbService) {}

	async find<
		IsInternal extends boolean,
		Result = IsInternal extends true ? DbService['SettingsModel'] : SettingsFullData,
	>(id: number, isInternal?: IsInternal): Promise<Result> {
		const settings = await this.dbService.settings.findByPk(id)

		if (!settings) {
			throw new NotFoundError('server.error.settings.not_found')
		}

		return (isInternal ? settings : settings.asFullData()) as Result
	}

	get = async (id: number): Promise<SettingsFullData> => this.find(id)

	create = async (dto: CreateSettingsDto): Promise<SettingsDto> => {
		const settings = await this.dbService.settings.findOne({
			where: { userId: dto.userId },
		})

		if (settings) {
			throw new BadRequestError('server.error.settings.already_exists')
		}

		const newSettings = await this.dbService.settings.create(dto)

		return newSettings.asDto()
	}

	update = async (id: number, dto: UpdateSettingsDto): Promise<SettingsFullData> => {
		const settings = await this.find(id, true)

		await settings.update(dto)

		return settings.asFullData()
	}

	delete = async (id: number): Promise<void> => {
		const settings = await this.find(id, true)

		await settings.destroy()
	}
}
