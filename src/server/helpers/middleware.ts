import { NextFunction, Request, Response } from 'express'

import { Log } from '~common/logger'
import { ErrorResponse } from '~types'

import { ServerEnv } from '../envSchema'

export const authMiddleware =
	(env: ServerEnv) => (req: Request, res: Response<ErrorResponse>, next: NextFunction) => {
		if (req.headers[env.BOT_AUTHENTICATE_HEADER_KEY] !== env.BOT_AUTHENTICATE_HEADER_VALUE) {
			Log.info({ res })
			res.status(401).send({ error: res.t('server.no_auth_header') })
		} else {
			next()
		}
	}

export const logMiddleware = (
	{ method, path, params, headers, body, query }: Request,
	_res: Response,
	next: NextFunction
) => {
	Log.info('⬅️ ', method, path, '\n', JSON.stringify({ params, headers, body, query }, null, 2))
	next()
}
