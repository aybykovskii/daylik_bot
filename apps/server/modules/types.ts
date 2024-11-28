import { IntId, UUIDId } from 'shared'

export type ServiceType<
	Model,
	IsUuidModel extends boolean,
	BaseDto,
	FullDataDto,
	CreateDto = BaseDto,
	UpdateDto = Partial<BaseDto>,
	Id extends IntId | UUIDId = IsUuidModel extends true ? UUIDId : IntId,
> = {
	_find: <IsInternal extends boolean, Result = IsInternal extends true ? Model : BaseDto>(
		id: Id,
		isInternal?: IsInternal
	) => Promise<Result>
	get: (id: Id) => Promise<FullDataDto>
	getAll: () => Promise<BaseDto[]>
	create: (dto: CreateDto) => Promise<FullDataDto>
	update: (id: Id, dto: UpdateDto) => Promise<FullDataDto>
	delete: (id: Id) => Promise<void>
}
