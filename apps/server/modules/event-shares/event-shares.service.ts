import { NotFoundError, Service } from '@common'
import { DbService } from '@modules'
import { ServiceType } from 'modules/types'
import {
	CreateEventSharingDto,
	EventSharingFullDataResponseDto,
	EventSharingResponseDto,
	UUIDId,
	UpdateEventSharingDto,
} from 'shared'

@Service({ name: 'eventShares', services: [DbService] })
export class EventSharesService
	implements
		ServiceType<
			DbService['EventSharingModel'],
			true,
			EventSharingResponseDto,
			EventSharingFullDataResponseDto,
			CreateEventSharingDto,
			UpdateEventSharingDto
		>
{
	constructor(private dbService: DbService) {}

	async _find<
		IsInternal extends boolean,
		Result = IsInternal extends true ? DbService['EventSharingModel'] : EventSharingResponseDto,
	>(uuid: UUIDId, isInternal?: IsInternal): Promise<Result> {
		const sharing = await this.dbService.eventSharing.findByPk(uuid)

		if (!sharing) {
			throw new NotFoundError('server.error.event_shares.not_found')
		}

		return (isInternal ? sharing : sharing.asFullData()) as Result
	}

	async getAll(): Promise<EventSharingResponseDto[]> {
		const shares = await this.dbService.eventSharing.findAll()

		return shares.map((sharing) => sharing.asDto())
	}

	async get(uuid: UUIDId): Promise<EventSharingFullDataResponseDto> {
		return this._find(uuid)
	}

	async create(dto: CreateEventSharingDto): Promise<EventSharingFullDataResponseDto> {
		const sharing = await this.dbService.eventSharing.create(dto)

		return sharing.asFullData()
	}

	async update(uuid: UUIDId, dto: UpdateEventSharingDto): Promise<EventSharingFullDataResponseDto> {
		const sharing = await this._find(uuid, true)

		await sharing.update(dto)

		return sharing.asFullData()
	}

	async delete(uuid: UUIDId): Promise<void> {
		const sharing = await this._find(uuid, true)

		await sharing.destroy()
	}
}
