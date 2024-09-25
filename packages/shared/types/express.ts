import { Request, Response } from 'express'

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type ParamsRequest<T> = Request<T, unknown, unknown, unknown>
export type BodyRequest<T> = Request<unknown, unknown, T, unknown>
export type QueryRequest<T> = Request<unknown, unknown, unknown, T>

export type BodyResponse<T> = Response<T>
export type ErrorResponse = { error: string }
