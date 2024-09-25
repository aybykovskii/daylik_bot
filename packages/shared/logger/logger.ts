import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'
import path from 'node:path'

type ModuleName = 'server' | 'bot' | 'common' | 'miniapp'

const createModuleLogger = (moduleName: ModuleName) => {
	const timestamp = format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
	const dirname = path.resolve(__dirname, './logs')

	const logger = createLogger({
		level: 'info',
		defaultMeta: { _module: moduleName },
		format: format.combine(
			timestamp,
			format.errors({ stack: true }),
			format.splat(),
			format.json({ space: 2 })
		),
		transports: [
			new transports.DailyRotateFile({
				dirname,
				filename: `${moduleName}-%DATE%-error.log`,
				datePattern: 'YYYY-MM-DD',
				level: 'error',
				maxSize: '20m',
				maxFiles: '14d',
			}),
			new transports.DailyRotateFile({
				dirname,
				filename: `${moduleName}-%DATE%-allLogs.log`,
				datePattern: 'YYYY-MM-DD',
				level: 'info',
				maxSize: '20m',
				maxFiles: '14d',
			}),
		],
	})

	if (process.env.MODE !== 'production') {
		logger.add(
			new transports.Console({
				format: format.combine(format.json({ space: 2 })),
			})
		)
	}

	return logger
}

export const commonLogger = createModuleLogger('common')
export const serverLogger = createModuleLogger('server')
export const botLogger = createModuleLogger('bot')
export const miniappLogger = createModuleLogger('bot')