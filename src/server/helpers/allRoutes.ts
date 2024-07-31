import { Router } from 'express'

export const makeAllRoutesRoutes = (basePath: string, router?: Router) => {
	const allRouter = router ?? Router()

	allRouter.all(`${basePath}/*`, (req, res) => {
		res.status(404).json({ error: res.t('server.no_endpoint', { path: req.path }) })
		return
	})

	return allRouter
}
