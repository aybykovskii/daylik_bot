import { NextFunction, Request, Response, Router } from 'express'
import 'reflect-metadata'
import { ZodError, ZodSchema } from 'zod'

import { RequestMethod } from '~types'

import { makeAllRoutesRoutes } from '@helpers'

export function Controller(rootPath: string) {
	// biome-ignore lint/complexity/noBannedTypes:
	return (controller: Function) => {
		Reflect.defineMetadata('rootPath', rootPath, controller.prototype)
	}
}

export function Route(path: string) {
	return (target: object, propertyKey: string) => {
		Reflect.defineMetadata('path', path, target, propertyKey)
	}
}

export function Method(method: RequestMethod) {
	return (target: object, propertyKey: string) => {
		Reflect.defineMetadata('method', method, target, propertyKey)
	}
}

export function ValidateBody(schema: ZodSchema) {
	return (target: object, propertyKey: string) => {
		Reflect.defineMetadata('validationSchema', schema, target, propertyKey)
	}
}

export function ValidateParams(schema: ZodSchema) {
	return (target: object, propertyKey: string) => {
		Reflect.defineMetadata('validationParamsSchema', schema, target, propertyKey)
	}
}

function getRootPath(target: object): string {
	return Reflect.getMetadata('rootPath', target) ?? ''
}

function getRoute(target: object, propertyKey: string): string {
	return Reflect.getMetadata('path', target, propertyKey)
}

function getMethod(target: object, propertyKey: string): RequestMethod {
	return Reflect.getMetadata('method', target, propertyKey) ?? 'get'
}

function getParamsValidationSchema(target: object, propertyKey: string): ZodSchema | undefined {
	return Reflect.getMetadata('validationParamsSchema', target, propertyKey)
}

const validateParams =
	(schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.parse(req.params)
			next()
		} catch (error) {
			res.status(400).json({
				error: res.t('server.invalid_params', { path: (error as ZodError).errors[0].path.join('.') }),
			})

			return
		}
	}

function getBodyValidationSchema(target: object, propertyKey: string): ZodSchema | undefined {
	return Reflect.getMetadata('validationSchema', target, propertyKey)
}

const validateBody =
	(schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
		try {
			req.body = await schema.parse(req.body)
			next()
		} catch (error) {
			res.status(400).json({
				error: res.t('server.invalid_argument', { path: (error as ZodError).errors[0].path.join('.') }),
			})

			return
		}
	}

// biome-ignore lint/suspicious/noExplicitAny:
export const makeRouter = (controller: any) => {
	const router = Router()
	const controllerPrototype = Object.getPrototypeOf(controller)
	const rootPath = getRootPath(controllerPrototype)

	for (const property in controller) {
		const path = getRoute(controller, property)
		const method = getMethod(controller, property)
		const paramsSchema = getParamsValidationSchema(controller, property)
		const schema = getBodyValidationSchema(controller, property)

		const middlewares = [controller[property]]

		if (paramsSchema) middlewares.unshift(validateParams(paramsSchema))
		if (schema) middlewares.unshift(validateBody(schema))

		router[method](rootPath + path, middlewares)
	}

	return makeAllRoutesRoutes(rootPath, router)
}
