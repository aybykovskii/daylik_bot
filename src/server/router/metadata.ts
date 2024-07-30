import { Request, Response, Router } from 'express'
import 'reflect-metadata'
import { ZodError, ZodSchema } from 'zod'

import { ErrorResponse, RequestMethod } from '~types'

export function Controller(rootPath: string) {
	// biome-ignore lint/complexity/noBannedTypes:
	return (controller: Function) => {
		Reflect.defineMetadata('rootPath', rootPath, controller.prototype)
	}
}

function getRootPath(target: object): string {
	return Reflect.getMetadata('rootPath', target) ?? ''
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

function getRoute(target: object, propertyKey: string): string {
	return Reflect.getMetadata('path', target, propertyKey)
}

function getMethod(target: object, propertyKey: string): RequestMethod {
	return Reflect.getMetadata('method', target, propertyKey) ?? 'get'
}

export function Validate(schema: ZodSchema) {
	return (target: object, propertyKey: string) => {
		Reflect.defineMetadata('validationSchema', schema, target, propertyKey)
	}
}

function getValidationSchema(target: object, propertyKey: string): ZodSchema | undefined {
	return Reflect.getMetadata('validationSchema', target, propertyKey)
}

const validateBody = (schema: ZodSchema) => async (req: Request, res: Response) => {
	try {
		req.body = await schema.parse(req.body)
		return
	} catch (error) {
		res.status(400).json({
			error: `Invalid input argument.${error instanceof ZodError ? ` Path: ${error.errors[0].path.join('.')}` : ''}`,
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
		const schema = getValidationSchema(controller, property)

		router[method](
			rootPath + path,
			schema ? [validateBody(schema), controller[property]] : [controller[property]]
		)
	}

	router.all(`${rootPath}/*`, (req: Request, res: Response<ErrorResponse>) => {
		res.status(404).json({ error: `Route ${req.path} not found` })
	})

	return router
}
