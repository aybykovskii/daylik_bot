import { NextFunction, Request, Response } from 'express'

import { Env } from '~environment'
import { serverLogger } from '~logger'
import { ErrorResponse } from '~types'

export const authMiddleware =
	(env: Env) => (req: Request, res: Response<ErrorResponse>, next: NextFunction) => {
		if (req.headers[env.AUTHENTICATE_HEADER_KEY] !== env.AUTHENTICATE_HEADER_VALUE) {
			res.status(401).send({ error: req.t('server.no_auth_header') })
		} else {
			next()
		}
	}

export const logMiddleware = ({ method, path }: Request, _res: Response, next: NextFunction) => {
	serverLogger.info('⬅️ ', { method, path })
	next()
}
