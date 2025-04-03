import { Type } from 'arktype'
import { DescribeRouteOptions, describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/arktype'

type Tag =
  | 'auth'
  | 'users'
  | 'roles'
  | 'events'
  | 'event_drafts'
  | 'event_shares'
  | 'payments'
  | 'settings'
  | 'statistics'
  | 'subscriptions'
  | 'friendship'

type Arg = [
  string,
  Tag,
  Record<
    number,
    | Type
    | {
        type: 'json' | 'text'
        schema: Type
      }
  >,
]

export const createRouteDescription = (...[title, tag, responses]: Arg) =>
  describeRoute({
    tags: [tag],
    summary: title,
    responses: Object.entries(responses).reduce<Required<DescribeRouteOptions>['responses']>(
      (acc, [status, response]) => {
        const schema = response instanceof Type ? response : response.schema
        const type = response instanceof Type ? 'json' : response.type

        acc[status] = {
          description: `${title}: **${status}**`,
          content: {
            [`application/${type}`]: {
              schema: resolver(schema),
            },
          },
        }

        return acc
      },
      {}
    ),
  })
