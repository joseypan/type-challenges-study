type OmitByType<T extends { [key: string]: any }, U> = {
  [key in keyof T as T[key] extends U ? never : key]: T[key]
}
