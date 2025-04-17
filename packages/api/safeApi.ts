import { Result, err, ok } from 'neverthrow'

export type MakeSafeApi<T> = {
  [K in keyof T]: T[K] extends (...args: infer P) => Promise<infer R>
    ? <E>(...args: P) => Promise<Result<R, E>>
    : MakeSafeApi<T[K]>
}

const makeApiCallSafe = async <T, E>(apiCall: Promise<T>): Promise<Result<T, E>> => {
  try {
    const response = await apiCall
    return ok(response)
  } catch (error) {
    return err(error as E)
  }
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
