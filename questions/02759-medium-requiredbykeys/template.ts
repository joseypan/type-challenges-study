// type RequiredByKeys<T, K = keyof T> = T & {
//   [key in keyof T as key extends K ? never : key]: T[key]
// }

type RequiredByKeys<T, K = keyof T> = Merge<
  T & Required<Pick<T, K extends keyof T ? K : never>>
>
