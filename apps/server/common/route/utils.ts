import { Type } from 'arktype'
import { DescribeRouteOptions, describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/arktype'
import { resolver as resolverZod } from 'hono-openapi/zod'
import { ZodSchema } from 'zod'

type Tag =
  | 'auth'
  | 'users'
  | 'roles'
  | 'events'
  | 'event-drafts'
  | 'event-shares'
  | 'payments'
  | 'settings'
  | 'statistics'
  | 'subscriptions'
  | 'friendships'

type Arg = [
  string,
  Tag,
  Record<
    number,
    | Type
    | ZodSchema
    | {
        type: 'json' | 'text'
        schema: Type | ZodSchema
      }
  >,
]

export const createRouteDescription = (...[title, tag, responses]: Arg) =>
  describeRoute({
    tags: [tag],
    summary: title,
    responses: Object.entries(responses).reduce<Required<DescribeRouteOptions>['responses']>(
      (acc, [status, response]) => {
        const schema = response instanceof Type ? response : response instanceof ZodSchema ? response : response.schema
        const type = response instanceof Type ? 'json' : response instanceof ZodSchema ? 'json' : response.type
        const isZod = response instanceof ZodSchema

        acc[status] = {
          description: `${title}: **${status}**`,
          content: {
            [`application/${type}`]: {
              schema: isZod ? resolverZod(schema as ZodSchema) : resolver(schema as Type),
            },
          },
        }

        return acc
      },
      {}
    ),
  })
