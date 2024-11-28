import { FastifyError } from 'fastify'

export type ErrorCode =
	| 'BAD_REQUEST'
	| 'UNAUTHORIZED'
	| 'FORBIDDEN'
	| 'NOT_FOUND'
	| 'INTERNAL_SERVER_ERROR'

export type ValidationError = {
	validationContext?: string
	validation?: {
		keyword: string
		params: {
			issue: {
				received: string
				expected: string
			}
		}
	}[]
}

export class ServerError extends Error implements FastifyError {
	statusCode: number
	code: ErrorCode
	message: I18nPhrase

	constructor(statusCode: number, code: ErrorCode, message: I18nPhrase) {
		super(message)

		this.statusCode = statusCode
		this.message = message
		this.code = code
	}
}

export class BadRequestError extends ServerError {
	constructor(message: I18nPhrase) {
		super(400, 'BAD_REQUEST', message)
	}
}

export class UnauthorizedError extends ServerError {
	constructor(message: I18nPhrase) {
		super(401, 'UNAUTHORIZED', message)
	}
}

export class ForbiddenError extends ServerError {
	constructor(message: I18nPhrase) {
		super(403, 'FORBIDDEN', message)
	}
}

export class NotFoundError extends ServerError {
	constructor(message: I18nPhrase) {
		super(404, 'NOT_FOUND', message)
	}
}

export class InternalServerError extends ServerError {
	constructor(message: I18nPhrase) {
		super(500, 'INTERNAL_SERVER_ERROR', message)
	}
}
