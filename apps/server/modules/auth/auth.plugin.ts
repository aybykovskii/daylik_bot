import { UnauthorizedError } from 'common'
import { onRequestHookHandler } from 'fastify'
import { verify } from 'jsonwebtoken'

import { env } from 'shared'

export const authTokenHookHandler: onRequestHookHandler = async (req) => {
	const token = req.headers.authorization?.split(' ')[1]

	if (!token) {
		throw new UnauthorizedError('server.error.auth.no_token')
	}

	try {
		const decoded = verify(token, env.JWT_SECRET) as { userId: number }
		req.userId = decoded.userId
		const params = req.params

		console.log({ params, userId: req.userId })
	} catch (_) {
		throw new UnauthorizedError('server.error.auth.invalid_token')
	}
}

// export const authHeaderMiddleware =
// 	(env: Env) => (req: Request, res: Response<ErrorResponse>, next: NextFunction) => {
// 		if (req.headers[env.AUTHENTICATE_HEADER_KEY] !== env.AUTHENTICATE_HEADER_VALUE) {
// 			res.status(401).send({ error: req.t('server.no_auth_header') })
// 		} else {
// 			next()
// 		}
// 	}
