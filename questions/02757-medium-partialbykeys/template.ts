type PartialByKeys<T, K extends keyof T> = T & {
  [key in keyof T as key extends K ? key : never]?: T[key]
}
