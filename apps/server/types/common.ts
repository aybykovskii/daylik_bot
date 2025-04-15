import { Type, type } from 'arktype'

import { IntId, uuid } from './db'

export const paramsId = type({ id: 'string.integer.parse | number' }).as<{ id: IntId }>()
export type ParamsId = typeof paramsId.infer

export const paramsUuid = type({
  uuid: uuid,
})
export type ParamsUuid = typeof paramsUuid.infer

export const emptyBody = type({})
export type EmptyBody = typeof emptyBody.infer

export const errorBody = type({
  error: 'string',
  'message?': 'string',
  'details?': type({
    path: 'string',
    message: 'string',
  }).array(),
})

export const makeErrorBody = (
  error: Type,
  { hasMessage, hasDetails }: { hasMessage?: true; hasDetails?: true } = {}
) => {
  const base = type({ error })

  if (hasMessage) {
    base.merge({ message: 'string' })
  }

  if (hasDetails) {
    base.merge({ details: type({ path: 'string', message: 'string' }).array() })
  }

  return base
}

export const successBody = type({ success: 'boolean' })
export type SuccessBody = typeof successBody.infer
export const emptySuccessBody = successBody.assert({ success: true })

export type Errors<T extends Record<string, Type>, Key extends keyof T> = {
  [K in keyof T]: K extends Key ? T[K]['infer'] : never
}[keyof T]
