import Sequelize, { importModels } from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'

import { env, serverLogger } from 'shared'

import config from './config/config'

let sql: Sequelize<PostgresDialect>

export const init = async () => {
	const envConfig = config[env.MODE]

	sql = new Sequelize({
		dialect: PostgresDialect,
		host: envConfig.host,
		port: envConfig.port,
		user: envConfig.username,
		password: envConfig.password,
		database: envConfig.database,
		models: await importModels(`${__dirname}/models/*.model.ts`),
		logging: false,
	})

	try {
		await sql.authenticate()
		serverLogger.info('Connected to postgres')
	} catch (e) {
		serverLogger.error(`Catch error while connecting to postgres: ${e}`)
	}

	try {
		await sql.sync({ alter: true })
		serverLogger.info('Synced models to postgres')
	} catch (e) {
		serverLogger.error(`Catch error while syncing models to postgres: ${e}`)
	}

	return sql
}

export const getSequelize = () => sql
