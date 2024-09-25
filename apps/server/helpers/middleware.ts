import { NextFunction, Request, Response } from 'express'

import { serverLogger } from 'shared/logger'

export const logMiddleware = ({ method, path }: Request, _res: Response, next: NextFunction) => {
	serverLogger.info('⬅️ ', { method, path })
	next()
}
