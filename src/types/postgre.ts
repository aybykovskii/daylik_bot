import { z } from 'zod'

export const modelId = z.coerce.number().brand<'modelId'>()
export type ModelId = z.infer<typeof modelId>

export type ModelBase = {
	id: ModelId
	createdAt: Date
	updatedAt: Date
}
