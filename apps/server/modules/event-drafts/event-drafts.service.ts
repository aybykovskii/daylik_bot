import {
	CreateEventDraftDto,
	EventDraftResponseDto,
	EventDraftsResponseDto,
	UpdateEventDraftDto,
} from 'shared'

import { NotFoundError, Service } from '@common'

import { DbService } from '../db'

@Service({ name: 'eventDraftsService', services: [DbService] })
export class EventDraftsService {
	constructor(private readonly dbService: DbService) {}

	async find<
		IsInternal extends boolean,
		Result = IsInternal extends true ? DbService['EventDraftModel'] : EventDraftResponseDto,
	>(id: number, isInternal?: IsInternal): Promise<Result> {
		const draft = await this.dbService.eventDraft.findByPk(id)

		if (!draft) {
			throw new NotFoundError('server.error.eventDrafts.not_found')
		}

		return (isInternal ? draft : draft.asDto()) as Result
	}

	getAll = async (): Promise<EventDraftsResponseDto> => {
		const drafts = await this.dbService.eventDraft.findAll()

		return drafts.map((draft) => draft.asDto())
	}

	get = async (id: number): Promise<EventDraftResponseDto> => this.find(id)

	create = async (dto: CreateEventDraftDto): Promise<EventDraftResponseDto> => {
		const draft = await this.dbService.eventDraft.create(dto)

		return draft.asDto()
	}

	update = async (id: number, dto: UpdateEventDraftDto): Promise<EventDraftResponseDto> => {
		const draft = await this.find(id, true)

		await draft.update(dto)

		return draft.asDto()
	}

	delete = async (id: number): Promise<void> => {
		const draft = await this.find(id, true)

		await draft.destroy()
	}
}
