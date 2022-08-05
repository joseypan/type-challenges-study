// type PartialByKeys<T, K extends keyof T> = T & {
//   [key in keyof T as key extends K ? key : never]?: T[key]
// }

type PartialByKeys<T, K = keyof T> = Merge<
  { [key in keyof T as key extends K ? never : key]: T[key] } & {
    [key in keyof T as key extends K ? key : never]?: T[key]
  }
>
