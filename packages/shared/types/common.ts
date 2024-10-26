import { z } from 'zod'

export type Extended<T> = T | (string & {})

export type Pretty<T extends Record<PropertyKey, unknown> | unknown[]> = T extends Record<
	PropertyKey,
	unknown
>[]
	? Pretty<T[number]>[]
	: {
			[K in keyof T]: T[K] extends Record<PropertyKey, unknown> ? Pretty<T[K]> : T[K]
		} & {}

export type StrictOmit<T, K extends keyof T> = Omit<T, K>

export type PrettyZod<T extends z.ZodTypeAny> = Pretty<z.infer<T>>
