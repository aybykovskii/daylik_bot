import Sequelize from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'
import cors from 'cors'
import express from 'express'
import i18nextMiddleware from 'i18next-express-middleware'

import { env } from 'shared/environment'
import { i18next } from 'shared/i18n'
import { serverLogger } from 'shared/logger'

import { logMiddleware, makeAllRoutesRoutes } from '@helpers'
import {
	EventDraftModel,
	EventModel,
	PaymentModel,
	RoleModel,
	SettingsModel,
	StatisticsModel,
	SubscriptionModel,
	UserModel,
} from '@models'
import { eventDraftsRouter, eventsRouter, paymentsRouter, rolesRouter, usersRouter } from '@router'
import { authHeaderMiddleware, authRouter /*authTokenMiddleware*/ } from '@router/auth'

const app = express()

const sql = new Sequelize({
	dialect: PostgresDialect,
	host: env.POSTGRES_HOST,
	port: env.POSTGRES_PORT,
	user: env.POSTGRES_USER,
	password: env.POSTGRES_PASSWORD,
	database: env.POSTGRES_DB,
	models: [
		RoleModel,
		UserModel,
		SettingsModel,
		StatisticsModel,
		SubscriptionModel,
		EventModel,
		EventDraftModel,
		PaymentModel,
	],
	logging: false,
})

sql
	.authenticate()
	.then(() => serverLogger.info('Connected to postgres'))
	.catch((e) => serverLogger.error(`Catch error while connecting to postgres: ${e}`))

sql
	.sync({ alter: true })
	.then(() => serverLogger.info('Synced models to postgres'))
	.catch((e) => serverLogger.error(`Catch error while syncing models to postgres: ${e}`))

app.use(cors({ origin: '*', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(i18nextMiddleware.handle(i18next))
app.use(logMiddleware)
app.use(authHeaderMiddleware(env))

app.use('/auth', authRouter, makeAllRoutesRoutes(''))

app.use(
	'/api',
	// authTokenMiddleware,
	rolesRouter,
	usersRouter,
	paymentsRouter,
	eventsRouter,
	eventDraftsRouter,
	makeAllRoutesRoutes('')
)

app
	.listen(env.SERVER_PORT, () => {
		serverLogger.info(`Listening on port ${env.SERVER_PORT}`)
	})
	.on('error', (e) => {
		serverLogger.error(`Catch error while listening on port ${env.SERVER_PORT}: ${e}`)
	})
