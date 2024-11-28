import 'reflect-metadata'
import {
	FastifyInstance,
	FastifyReply,
	FastifyRequest,
	FastifySchema,
	onRequestHookHandler,
} from 'fastify'
import { FastifyZodOpenApiTypeProvider } from 'fastify-zod-openapi'

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD'
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type MyAny = any

interface RouteDefinition {
	method: HTTPMethod
	path: string
	handlerName: string | symbol
}

export function Service({
	name,
	services,
}: { name: string; services?: unknown[] }): ClassDecorator {
	return (target) => {
		Reflect.defineMetadata('name', name, target)
		Reflect.defineMetadata('services', services ?? [], target)

		InjectServices()(target)
	}
}

const instanceCache = new Map<MyAny, MyAny>()

export function createInstance<T>(target: new (...args: unknown[]) => T): T {
	if (instanceCache.has(target)) {
		return instanceCache.get(target)
	}

	const services = Reflect.getMetadata('services', target) || []
	const servicesToInject = services.map(createInstance) ?? []

	const instance = new target(...servicesToInject)

	instanceCache.set(target, instance)

	return instance
}

export function InjectServices(): ClassDecorator {
	return (target: MyAny) => {
		const originalConstructor = target

		const newConstructor: MyAny = (..._: unknown[]) => {
			const instance = createInstance(originalConstructor)
			return instance
		}

		newConstructor.prototype = originalConstructor.prototype

		return newConstructor
	}
}

export function Controller(path: string, services: MyAny[] = []): ClassDecorator {
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	return (target: Function) => {
		Reflect.defineMetadata('path', path, target)
		Reflect.defineMetadata('services', services, target)

		if (!Reflect.hasMetadata('routes', target)) {
			Reflect.defineMetadata('routes', [], target)
		}
	}
}

function createMethodDecorator(method: HTTPMethod) {
	return (path: string): MethodDecorator => {
		return (target, propertyKey) => {
			const routes: RouteDefinition[] = Reflect.getMetadata('routes', target.constructor) || []

			routes.push({ method, path, handlerName: propertyKey })

			Reflect.defineMetadata('routes', routes, target.constructor)
		}
	}
}

export const Get = createMethodDecorator('GET')
export const Post = createMethodDecorator('POST')
export const Put = createMethodDecorator('PUT')
export const Delete = createMethodDecorator('DELETE')
export const Patch = createMethodDecorator('PATCH')
export const Options = createMethodDecorator('OPTIONS')
export const Head = createMethodDecorator('HEAD')

export function Validate(schema: FastifySchema): MethodDecorator {
	return (target, propertyKey) => {
		Reflect.defineMetadata('schema', schema, target, propertyKey)
	}
}

type RegisterControllersOptions = {
	prefix?: string
	handlers?: {
		onRequest?: onRequestHookHandler[]
	}
	controllers: MyAny[]
}

export function registerControllers(
	fastify: FastifyInstance,
	{ prefix = '', handlers, controllers }: RegisterControllersOptions
) {
	for (const ControllerClass of controllers) {
		const instance = createInstance(ControllerClass)
		const instancePrototype = Object.getPrototypeOf(instance)

		const basePath: string = Reflect.getMetadata('path', ControllerClass) || ''
		const routes: RouteDefinition[] = Reflect.getMetadata('routes', ControllerClass) || []

		for (const route of routes) {
			const url = [prefix, basePath, route.path].join('')

			const schema = Reflect.getMetadata('schema', instancePrototype, route.handlerName)

			const handler = async (request: FastifyRequest, reply: FastifyReply) => {
				const result = await (instance as MyAny)[route.handlerName](request, reply)
				reply.send(result)
			}

			fastify.withTypeProvider<FastifyZodOpenApiTypeProvider>().route({
				method: route.method,
				url: url.endsWith('/') ? url.substring(0, url.length - 1) : url,
				handler,
				schema: {
					...schema,
					tags: basePath.split('/').filter(Boolean),
				},
				onRequest: handlers?.onRequest,
			})
		}
	}
}
