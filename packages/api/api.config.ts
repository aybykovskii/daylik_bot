import path from 'node:path'

import { generateApi } from 'swagger-typescript-api'

generateApi({
  url: 'http://localhost:8080/api/docs',
  output: path.resolve(__dirname),
  fileName: 'api.generated.ts',
  silent: false,
  generateClient: true,
  generateRouteTypes: true,
  sortRoutes: true,
  sortTypes: true,
  httpClientType: 'fetch',
  unwrapResponseData: true,
  moduleNameFirstTag: true,
  extractResponseError: true,
  hooks: {
    onCreateComponent(component) {
      if (
        component.rawTypeData
        && '$schemaPath' in component.rawTypeData
        && Array.isArray(component.rawTypeData.$schemaPath)
      ) {
        const [routeNameByPath] = component.rawTypeData.$schemaPath as [string]

        const routePath = routeNameByPath
          .replace(/ApiV1/gi, '')
          .replace(/_(\w)/g, (_, char) => char.toUpperCase())
          .replace(/^./, (char) => char.toUpperCase())

        return {
          ...component,
          typeName: `${routePath}Error`,
        }
      }

      return component
    },

    onFormatRouteName(routeInfo, templateRouteName) {
      const pathTag = routeInfo.tags?.[0].replace(/_(\w)/g, (_, char) => char.toUpperCase())
      const tagRegex = new RegExp(pathTag ?? '', 'ig')

      const transformName = (name: string) =>
        name
          .replace(tagRegex, '')
          .replace(/ApiV1/g, '')
          .replace(/get$/g, 'GetAll')
          .replace(/^./, (char) => char.toLowerCase())

      return transformName(templateRouteName)
    },
  },
})
