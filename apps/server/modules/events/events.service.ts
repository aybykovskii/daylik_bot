import { NotFoundError, Service } from '@common'

import {
	CreateEventDto,
	EventFullDataResponseDto,
	EventResponseDto,
	EventsResponseDto,
	UpdateEventDto,
} from 'shared'

import { ServiceType } from 'modules/types'
import { DbService } from '../db'
import { EventDraftsService } from '../event-drafts'

@Service({ name: 'eventsService', services: [DbService, EventDraftsService] })
export class EventsService
	implements
		ServiceType<
			DbService['EventModel'],
			false,
			EventResponseDto,
			EventFullDataResponseDto,
			CreateEventDto,
			UpdateEventDto
		>
{
	constructor(
		private readonly dbService: DbService,
		private readonly eventDraftsService: EventDraftsService
	) {}

	async _find<
		IsInternal extends boolean,
		Result = IsInternal extends true ? DbService['EventModel'] : EventResponseDto,
	>(id: number, isInternal?: IsInternal): Promise<Result> {
		const event = await this.dbService.event.findByPk(id)

		if (!event) {
			throw new NotFoundError('server.error.events.not_found')
		}

		return (isInternal ? event : event.asFullData()) as Result
	}

	getAll = async (): Promise<EventsResponseDto> => {
		const events = await this.dbService.event.findAll()

		return events.map((event) => event.asDto())
	}

	get = async (id: number): Promise<EventFullDataResponseDto> => this._find(id)

	create = async (dto: CreateEventDto): Promise<EventFullDataResponseDto> => {
		let event: DbService['EventModel']

		if ('fromDraftId' in dto) {
			const { id: _, ...eventDraft } = await this.eventDraftsService.get(dto.fromDraftId)
			event = await this.dbService.event.create(eventDraft)
			await this.eventDraftsService.delete(dto.fromDraftId)
		} else {
			event = await this.dbService.event.create(dto)
		}

		return event.asFullData()
	}

	update = async (id: number, dto: UpdateEventDto): Promise<EventFullDataResponseDto> => {
		const event = await this._find(id, true)

		await event.update(dto)

		return event.asFullData()
	}

	delete = async (id: number): Promise<void> => {
		const event = await this._find(id, true)

		await event.destroy()
	}
}
