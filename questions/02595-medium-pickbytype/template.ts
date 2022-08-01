type PickByType<T, U> = T extends { [key: string]: any }
  ? {
      [key in keyof T as T[key] extends U ? key : never]: T[key]
    }
  : never
