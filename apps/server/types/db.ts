import { type } from 'arktype'

export const uuid = type('string.uuid').brand('uuid')
export type UUID = typeof uuid.infer

export const intId = type('number.integer').brand('intId')
export type IntId = typeof intId.infer

export const dates = type({
  createdAt: 'string.date.iso',
  updatedAt: 'string.date.iso',
})
export type Dates = typeof dates.infer

export const modelIntId = dates.merge({
  id: intId,
})
export type ModelIntId = typeof modelIntId.infer

export const modelUuidId = dates.merge({
  id: uuid,
})
export type ModelUuidId = typeof modelUuidId.infer

export const paramsId = type({ id: 'string.integer.parse' }).as<{ id: IntId }>()
export type ParamsId = typeof paramsId.infer

export const paramsUuid = type({
  uuid: uuid,
})
export type ParamsUuid = typeof paramsUuid.infer

export const emptyBody = type({})
export type EmptyBody = typeof emptyBody.infer
