import { zodResponseFormat } from 'openai/helpers/zod.mjs'
import { AutoParseableResponseFormat } from 'openai/lib/parser.mjs'
import { z } from 'zod'

export type Parsed<T extends z.ZodType> = AutoParseableResponseFormat<z.infer<T>>

export const parseResponse = <T extends z.ZodType>(schema: T) =>
  zodResponseFormat(schema as never, 'response') as Parsed<T>
