import { z } from 'zod'

import { intId, uuidId } from './postgre'

export const withDbDates = z.object({
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})
export type WithDbDates = z.infer<typeof withDbDates>

export const withDbId = z.object({
	id: intId,
})
export type WithDbIds = z.infer<typeof withDbId>

export const withDbUuids = z.object({
	id: uuidId,
})
export type WithDbUuids = z.infer<typeof withDbUuids>

export const paramsId = withDbId
export type ParamsId = z.infer<typeof paramsId>

export const paramsUuid = z.object({
	uuid: uuidId,
})
export type ParamsUuid = z.infer<typeof paramsUuid>
