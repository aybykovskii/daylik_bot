import { OpenApiSpecsOptions } from 'hono-openapi'

export const OpenApiConfig: OpenApiSpecsOptions = {
  documentation: {
    info: {
      title: 'Daylik API',
      version: '1.0.0',
      description: 'API for Daylik',
      contact: {
        name: 'Aleksei Bykovskii',
        email: 'aybykovskii@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local server',
      },
    ],
  },
}
