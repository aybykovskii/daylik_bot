import path from 'node:path'
import Sequelize from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'
import express from 'express'

import { Environment } from '~common/environment'
import { i18n } from '~common/i18n'
import { Log, loggerMiddleware, validateMiddleware } from '~common/logger'

import { envSchema } from './envSchema'
import { EventDraftModel, EventModel, PaymentModel, UserModel } from './models'
import { eventDraftsRouter, eventsRouter, paymentsRouter, usersRouter } from './router'

const app = express()

const env = Environment.get(envSchema, [
	path.resolve(__dirname, '../../.env'),
	path.resolve(__dirname, '.env'),
])

const sql = new Sequelize({
	dialect: PostgresDialect,
	host: env.POSTGRES_HOST,
	port: env.POSTGRES_PORT,
	user: env.POSTGRES_USER,
	password: env.POSTGRES_PASSWORD,
	database: env.POSTGRES_DB,
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
app.use(loggerMiddleware)
app.use(validateMiddleware)
app.use(express.json())
app.use(i18n.init)

app.use('/api', usersRouter, paymentsRouter, eventsRouter, eventDraftsRouter)

app
	.listen(env.SERVER_PORT, () => {
		Log.info(`Listening on port ${env.SERVER_PORT}`)
	})
	.on('error', (e) => {
		Log.error(`Catch error while listening on port ${env.SERVER_PORT}: ${e}`)
	})
