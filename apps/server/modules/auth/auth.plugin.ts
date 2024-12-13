import { UnauthorizedError } from 'common'
import { onRequestHookHandler } from 'fastify'
import { verify } from 'jsonwebtoken'

import { env } from 'shared'

export const authTokenHookHandler: onRequestHookHandler = (req, _, done) => {
	// TODO: Refactor this
	if (req.url === '/api/v1/users' && req.method === 'POST') {
		return done()
	}

	const token = req.headers.authorization?.split(' ')[1]

	if (!token) {
		throw new UnauthorizedError('server.error.auth.no_token')
	}

	try {
		const decoded = verify(token, env.JWT_SECRET) as { userId: number }
		req.userId = decoded.userId
		done()
	} catch (_) {
		throw new UnauthorizedError('server.error.auth.invalid_token')
	}
}
