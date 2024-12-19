import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'
import path from 'node:path'

type ModuleName = 'server' | 'bot' | 'common' | 'db'

const createModuleLogger = (moduleName: ModuleName) => {
	const timestamp = format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
	const dirname = path.resolve(__dirname, './logs', moduleName)

	return createLogger({
		level: 'info',
		defaultMeta: { _module: moduleName },
		format: format.combine(
			timestamp,
			format.errors({ stack: true }),
			format.splat(),
			format.json({ space: 2 })
		),
		transports: [
			new transports.Console({
				format: format.combine(format.json({ space: 2 })),
			}),
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
}

export const commonLogger = createModuleLogger('common')
export const serverLogger = createModuleLogger('server')
export const botLogger = createModuleLogger('bot')
export const dbLogger = createModuleLogger('db')
