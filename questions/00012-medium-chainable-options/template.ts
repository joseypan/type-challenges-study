type Chainable = {
  option(key: string, value: any): any
  get(): any
}
// type Chainable<T = {}> = {
//   option<K extends string, V>(
//     key: K extends keyof T ? never : K,
//     value: V,
//   ): Chainable<T & { [k in K]: V }>
//   get(): T
// }
