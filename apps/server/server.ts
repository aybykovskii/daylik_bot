import 'zod-openapi/extend'
import Swagger from '@fastify/swagger'
import SwaggerUi from '@fastify/swagger-ui'
import Fastify from 'fastify'
import {
	fastifyZodOpenApiPlugin,
	fastifyZodOpenApiTransform,
	fastifyZodOpenApiTransformObject,
	serializerCompiler,
	validatorCompiler,
} from 'fastify-zod-openapi'

import { i18next, serverLogger } from 'shared'

import { ServerError, ValidationError, registerControllers } from 'common'
import {
	AuthController,
	EventDraftsController,
	EventSharesController,
	EventsController,
	FriendshipController,
	PaymentsController,
	RolesController,
	UsersController,
	authTokenHookHandler,
} from 'modules'

import { init as initDb } from './db'

const server = Fastify({ logger: false })

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

await server.register(fastifyZodOpenApiPlugin)

await server.register(Swagger, {
	openapi: {
		openapi: '3.0.3',
		info: {
			title: 'Daylik',
			description: 'Daylik API documentation',
			version: '0.1.0',
		},
	},
	transform: fastifyZodOpenApiTransform,
	transformObject: fastifyZodOpenApiTransformObject,
})
await server.register(SwaggerUi, {
	routePrefix: '/documentation',
})

server.decorateRequest('userId', null)
server.decorateRequest('t', i18next.t)

registerControllers(server, {
	prefix: '/api',
	controllers: [AuthController],
})

registerControllers(server, {
	prefix: '/api/v1',
	controllers: [
		UsersController,
		RolesController,
		EventsController,
		EventDraftsController,
		EventSharesController,
		FriendshipController,
		PaymentsController,
	],
	handlers: {
		onRequest: [authTokenHookHandler],
	},
})

server.withTypeProvider().route({
	method: 'GET',
	url: '/health',
	handler: async (_, reply) => {
		return reply.send('ok')
	},
})

server.setErrorHandler<ServerError & ValidationError>((error, req, reply) => {
	if (error.validation) {
		serverLogger.error('Occurred validation error', { error })
		reply.status(400).send({
			code: 400,
			error: req.t('server.error.validation', {
				type: error.validation[0].keyword,
				path: error.validationContext,
				expected: error.validation[0].params.issue.expected,
				received: error.validation[0].params.issue.received,
			}),
		})
	} else {
		serverLogger.error('Occurred server error', { error })
		reply.status(error.statusCode || 500).send({
			code: error.statusCode,
			error: req.t(error.message as I18nPhrase),
		})
	}
})

server.setNotFoundHandler((req, reply) => {
	reply.status(404).send({
		code: 404,
		error: req.t('server.error.routes.not_found', { route: req.url }),
	})
})

server.listen({ port: 8080, host: '0.0.0.0' }, async (err, address) => {
	if (err) {
		serverLogger.error(err)
		process.exit(1)
	}

	serverLogger.info(`Server listening on ${address}`)
	await initDb()
})
