type RequiredByKeys<T, K extends keyof T> = T & {
  [key in keyof T as key extends K ? never : key]: T[key]
}
