import path from 'node:path'
import { generateApi } from 'swagger-typescript-api'

generateApi({
	url: 'http://localhost:8080/documentation/yaml',
	output: path.resolve(__dirname),
	name: 'api.generated.ts',
	silent: false,
	generateClient: true,
	generateRouteTypes: true,
	sortRoutes: true,
	sortTypes: true,
	httpClientType: 'fetch',
	unwrapResponseData: true,
	moduleNameFirstTag: true,
	hooks: {
		onCreateRouteName(routeNameInfo, rawRouteInfo) {
			const pathTag = rawRouteInfo.tags?.[0].replace(/_(\w)/g, (_, char) => char.toUpperCase())
			const tagRegex = new RegExp(pathTag ?? '', 'ig')

			const transformName = (name: string) =>
				name
					.replace(tagRegex, '')
					.replace(/v\d/g, '')
					.replace(/Partial/g, '')
					.replace(/Detail/g, 'Get')
					.replace(/^./, (char) => char.toLowerCase())

			const result = {
				...routeNameInfo,
				usage: transformName(routeNameInfo.usage),
				original: transformName(routeNameInfo.original),
			}
			console.log({ result, routeNameInfo, pathTag })

			return result
		},
	},
})
