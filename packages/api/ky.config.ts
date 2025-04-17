import ky from 'ky'

import { Api as ApiClass, RequestParams } from './api.generated'

import { makeApiSafe } from './safeApi'

class AuthData {
  static token = ''

  public static setToken = (token: string) => {
    this.token = token
  }

  public static getToken = () => this.token
}

const customFetch = (input: RequestInfo | URL, init?: RequestInit) =>
  ky(input, {
    ...init,
    throwHttpErrors: false,
    hooks: {
      beforeRequest: [
        (req) => {
          return req.headers.set('Authorization', AuthData.getToken())
        },
      ],
      afterResponse: [
        async (_, options, res) => {
          const { method } = options
          const { url, status } = res

          if (status >= 400) {
            const { message } = (await res.json()) as { message: string }

            console.error(`Request to ${method} ${url} failed with status ${status}: ${message}`)
          }

          const token = res.headers.get('Authorization')

          if (token && !AuthData.getToken()) {
            AuthData.setToken(token)
          }

          return res
        },
      ],
    },
  })

export type ApiV1 = Omit<ApiClass<unknown>, 'abortRequest' | 'request' | 'setSecurityData'>
export const api = new ApiClass({ customFetch }) as ApiV1

export const safeApi = makeApiSafe(api)
export type SafeApiV1 = typeof safeApi

type ApiParams = Omit<RequestParams, 'baseUrl' | 'signal' | 'cancelToken'> & { baseUrl?: string }
export const createApi = (params: ApiParams) => {
  const api = new ApiClass({ customFetch, baseApiParams: params }) as ApiV1

  api.baseUrl = params.baseUrl ?? ''

  return {
    api,
    safeApi: makeApiSafe(api),
  }
}
export type ApisV1 = ReturnType<typeof createApi>
