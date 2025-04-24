import { swaggerUI } from '@hono/swagger-ui'
import Bun from 'bun'
import { Hono, MiddlewareHandler } from 'hono'
import { RegExpRouter } from 'hono/router/reg-exp-router'

import { openAPISpecs } from 'hono-openapi'
import { env, serverLogger } from 'shared'

import { OpenApiConfig } from '@/common/docs'
import { dailyNotificationJob, eventNotificationJob } from '@/common/jobs'
import { init as initDB } from '@/db'
import {
  authMiddleware,
  authRouter,
  eventDraftsRouter,
  eventSharesRouter,
  eventsRouter,
  friendshipRouter,
  paymentsRouter,
  settingsRouter,
  subscriptionsRouter,
  usersRouter,
} from '@/modules'

const root = new Hono({ router: new RegExpRouter() })
const v1 = new Hono({ router: new RegExpRouter() })

const logger: MiddlewareHandler = async (c, next) => {
  serverLogger.info('Registered request', { method: c.req.method, url: c.req.url, params: c.req.param() })

  return next()
}
//Auth
root.route('/api/auth', authRouter)

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

root.route('/api/v1', v1)

// Swagger Docs
root.get('/api/docs', openAPISpecs(root, OpenApiConfig))
root.get('/api/docs/ui', swaggerUI({ url: '/api/docs' }))

// Health check
root.get('/health', (c) => c.json({ status: 'ok' }))

// Error handler
root.onError((err, c) => {
  serverLogger.error('Occurred internal server error', { error: err.message })
  return c.json({ error: 'ERR_INTERNAL_SERVER_ERROR', details: err.message }, 500)
})

// Not found handler
root.notFound((c) => c.json({ error: 'ERR_ROUTE_NOT_FOUND' }, 404))

const db = await initDB()

dailyNotificationJob.start()
eventNotificationJob.start()

const server = Bun.serve({
  port: env.SERVER_PORT,
  fetch: root.fetch,
  development: false,
})

process.on('SIGTERM', async () => {
  await db.close()
  await server.stop()
  serverLogger.debug('SIGTERM signal received: DB connection closed, HTTP server stopped')
  process.exit(0)
})

export default server
