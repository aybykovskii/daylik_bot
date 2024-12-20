import Sequelize, { importModels } from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'

import { dbLogger, env, serverLogger } from 'shared'

let sql: Sequelize<PostgresDialect>

export const init = async () => {
	sql = new Sequelize({
		dialect: PostgresDialect,
		host: env.POSTGRES_HOST,
		port: env.POSTGRES_PORT,
		user: env.POSTGRES_USER,
		password: env.POSTGRES_PASSWORD,
		database: env.POSTGRES_DB,
		models: await importModels(`${__dirname}/models/*.model.ts`),
		logging: (sql, timing) => dbLogger.info(sql, { timing }),
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
