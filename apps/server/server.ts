import { swaggerUI } from '@hono/swagger-ui'
import { Hono, MiddlewareHandler } from 'hono'
import { cors } from 'hono/cors'
import { RegExpRouter } from 'hono/router/reg-exp-router'

import { openAPISpecs } from 'hono-openapi'
import { serverLogger } from 'shared'

import { OpenApiConfig } from '@/common/docs'
import { init as initDB } from '@/db'
import {
  eventDraftsRouter,
  eventSharesRouter,
  eventsRouter,
  friendshipRouter,
  paymentsRouter,
  settingsRouter,
  subscriptionsRouter,
  usersRouter,
} from '@/modules'
import { authMiddleware, authRouter } from '@/modules/auth'

import { dailyNotificationJob } from './common/jobs'

const server = new Hono({ router: new RegExpRouter() })
const v1 = new Hono({ router: new RegExpRouter() })

v1.use('*', cors({ origin: '*' }))

const logger: MiddlewareHandler = async (c, next) => {
  serverLogger.info('Registered request', { method: c.req.method, url: c.req.url, params: c.req.param() })

  return next()
}
//Auth
server.route('/api/auth', authRouter)

// V1
v1.use(logger)
v1.use(authMiddleware)
v1.route('/settings', settingsRouter)
v1.route('/event_drafts', eventDraftsRouter)
v1.route('/event_shares', eventSharesRouter)
v1.route('/events', eventsRouter)
v1.route('/payments', paymentsRouter)
v1.route('/users', usersRouter)
v1.route('/friendship', friendshipRouter)
v1.route('/subscriptions', subscriptionsRouter)

server.route('/api/v1', v1)

// Swagger Docs
server.get('/api/docs', openAPISpecs(server, OpenApiConfig))
server.get('/api/docs/ui', swaggerUI({ url: '/api/docs' }))

// Health check
server.get('/health', (c) => c.json({ status: 'ok' }))

// Error handler
server.onError((err, c) => {
  serverLogger.error('Occurred internal server error', { error: err.message })
  return c.json({ error: 'ERR_INTERNAL_SERVER_ERROR', details: err.message }, 500)
})

// Not found handler
server.notFound((c) => c.json({ error: 'ERR_ROUTE_NOT_FOUND' }, 404))

await initDB()

dailyNotificationJob.start()

export default {
  port: 8080,
  fetch: server.fetch,
}
