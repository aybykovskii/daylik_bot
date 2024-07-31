import path from 'node:path'
import Sequelize from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'
import express from 'express'

import { Environment } from '~common/environment'
import { i18n } from '~common/i18n'
import { Log } from '~common/logger'

import { authMiddleware, logMiddleware, makeAllRoutesRoutes } from '@helpers'
import { EventDraftModel, EventModel, PaymentModel, UserModel } from '@models'
import { eventDraftsRouter, eventsRouter, paymentsRouter, usersRouter } from '@router'

import { serverEnvSchema } from './envSchema'

const app = express()

const serverEnv = Environment.get(serverEnvSchema, [
	path.resolve(__dirname, '../../.env'),
	path.resolve(__dirname, '.env'),
])

const sql = new Sequelize({
	dialect: PostgresDialect,
	host: serverEnv.POSTGRES_HOST,
	port: serverEnv.POSTGRES_PORT,
	user: serverEnv.POSTGRES_USER,
	password: serverEnv.POSTGRES_PASSWORD,
	database: serverEnv.POSTGRES_DB,
	models: [UserModel, EventModel, EventDraftModel, PaymentModel],
	logging: false,
})

sql
	.authenticate()
	.then(() => Log.info('Connected to postgres'))
	.catch((e) => Log.error(`Catch error while connecting to postgres: ${e}`))

sql
	.sync()
	.then(() => Log.info('Synced models to postgres'))
	.catch((e) => Log.error(`Catch error while syncing models to postgres: ${e}`))

// TODO: Add CORS middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(i18n.init)
app.use(logMiddleware)
app.use(authMiddleware(serverEnv))

app.use(
	'/api',
	usersRouter,
	paymentsRouter,
	eventsRouter,
	eventDraftsRouter,
	makeAllRoutesRoutes('')
)

app
	.listen(serverEnv.SERVER_PORT, () => {
		Log.info(`Listening on port ${serverEnv.SERVER_PORT}`)
	})
	.on('error', (e) => {
		Log.error(`Catch error while listening on port ${serverEnv.SERVER_PORT}: ${e}`)
	})
