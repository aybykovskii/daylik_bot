import { z } from 'zod'

export const modelId = z.coerce.number().brand<'modelId'>()
export type ModelId = z.infer<typeof modelId>

export const uuidId = z.string().uuid().brand<'uuidId'>()
export type UUIDId = z.infer<typeof uuidId>

export const intId = z.coerce.number().brand<'intId'>()
export type IntId = z.infer<typeof intId>

export const dbDateTime = z.coerce.date().brand<'dbDateTime'>()
export type DbDateTime = z.infer<typeof dbDateTime>

export type ModelUuidId = {
	id: UUIDId
}

export type ModelIntId = {
	id: IntId
}

type ModelDates = {
	createdAt: Date
	updatedAt: Date
}

export type ModelUuidBase = ModelUuidId & ModelDates
export type ModelIntBase = ModelIntId & ModelDates
