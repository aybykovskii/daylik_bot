import { KyResponse } from 'ky'
import { Ok, Result, ResultAsync, err } from 'neverthrow'

export type MakeSafeApi<T> = {
  [K in keyof T]: T[K] extends (...args: infer P) => Promise<infer R>
    ? <E>(...args: P) => Promise<Result<R, E>>
    : MakeSafeApi<T[K]>
}

const makeApiCallSafe = async <T, E>(apiCall: Promise<T>): Promise<Result<T, E>> => {
  const res = await ResultAsync.fromPromise(apiCall, (res) => res)

  if (res.isErr()) {
    const errorResponse = res.error as KyResponse

    if ('json' in errorResponse) {
      const originalError = await errorResponse.json<E>()

      return err(originalError)
    }

    return err(errorResponse)
  }

  return res as Ok<T, E>
}

export const makeApiSafe = <T extends object>(apiInstance: T): MakeSafeApi<T> =>
  new Proxy(apiInstance, {
    get(target, prop) {
      const value = target[prop as keyof T]

      if (typeof value === 'function') {
        return new Proxy(value, {
          apply: (target, thisArg, args) => {
            const result = target.apply(thisArg, args)

            return result instanceof Promise ? makeApiCallSafe(result) : result
          },
        })
      }

      if (value && typeof value === 'object') {
        return makeApiSafe(value)
      }

      return value
    },
  }) as MakeSafeApi<T>
