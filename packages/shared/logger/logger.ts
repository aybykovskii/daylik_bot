import path from 'node:path'
import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'

import { DATE_FORMAT } from '../time'

type ModuleName = 'server' | 'bot' | 'common'

const createModuleLogger = (moduleName: ModuleName) => {
  const timestamp = format.timestamp({ format: `${DATE_FORMAT} HH:mm:ss` })
  const dirname = path.resolve(__dirname, './logs', moduleName)

  return createLogger({
    level: 'info',
    defaultMeta: { _module: moduleName },
    format: format.combine(timestamp, format.errors({ stack: true }), format.splat(), format.json({ space: 2 })),
    transports: [
      new transports.Console({
        level: 'debug',
        format: format.combine(format.colorize({ all: true })),
      }),
      new transports.DailyRotateFile({
        dirname,
        filename: `${moduleName}-%DATE%-error.log`,
        datePattern: DATE_FORMAT,
        level: 'error',
        maxSize: '20m',
        maxFiles: '14d',
      }),
      new transports.DailyRotateFile({
        dirname,
        filename: `${moduleName}-%DATE%-allLogs.log`,
        datePattern: DATE_FORMAT,
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
