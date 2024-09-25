import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { env } from 'shared/environment'
import { Env, ErrorResponse } from 'shared/types'

export const authTokenMiddleware = (
	req: Request,
	res: Response<ErrorResponse>,
	next: NextFunction
) => {
	const token = req.headers.authorization?.split(' ')[1]

	if (!token) {
		res.status(401).send({ error: req.t('server.error.auth.no_token') })
		return
	}

	try {
		const decoded = verify(token, env.JWT_SECRET) as { userId: number }
		req.userId = decoded.userId
		next()
	} catch (_) {
		res.status(401).send({ error: req.t('server.error.auth.invalid_token') })
	}
}

export const authHeaderMiddleware =
	(env: Env) => (req: Request, res: Response<ErrorResponse>, next: NextFunction) => {
		if (req.headers[env.AUTHENTICATE_HEADER_KEY] !== env.AUTHENTICATE_HEADER_VALUE) {
			res.status(401).send({ error: req.t('server.no_auth_header') })
		} else {
			next()
		}
	}
