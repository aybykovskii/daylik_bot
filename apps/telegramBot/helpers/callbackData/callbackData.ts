type GetFields<T extends string> = T extends `${string}{${infer U}}${infer Rest}` ? U | GetFields<Rest> : never

type HasRequiredFields<T extends string, Required extends string> = Required extends GetFields<T> ? true : false

type FillValues<
  T extends string,
  // biome-ignore lint/suspicious/noExplicitAny: It's not possible to infer the type of the object
  Values extends Record<PropertyKey, any>,
> = T extends `${infer U}{${infer Field}}${infer Rest}`
  ? Field extends keyof Values
    ? `${U}{${Values[Field]}}${FillValues<Rest, Values>}`
    : `${U}{${Field}}${FillValues<Rest, Values>}`
  : T

export class CallbackData<T extends string> {
  private data: T

  regex: RegExp

  private paramRegex = /(?<={)(.*)(?=})/g

  constructor(data: T) {
    this.data = data
    this.regex = new RegExp(data.replace(this.paramRegex, `(.*)`))
  }

  private getterMatch = (str: string) =>
    str.match(this.paramRegex)?.map((s) => s.replace(/\{([\w.]*)\}/gi, '$1')) as string[]

  match = <Str extends string = string>(str: Str) =>
    this.regex.test(str) as HasRequiredFields<Str, GetFields<T>> extends true ? true : boolean

  fill = <Value, Values extends Record<GetFields<T>, Value>>(fields: Values) => {
    return this.data.replace(/\{(\w*)\}/gi, (_, key: GetFields<T>) => `{${fields[key]}}`) as FillValues<T, Values>
  }

  get = <Result extends Record<GetFields<T>, string> = Record<GetFields<T>, string>>(str: string) => {
    const values = this.getterMatch(str)

    return this.getterMatch(this.data).reduce((acc, field, index) => ({ ...acc, [field]: values[index] }), {} as Result)
  }
}
