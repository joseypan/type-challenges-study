type AppendToObject<T extends Object, U, V> = T extends Record<string, any>
  ? U extends string
    ? { [key in keyof T | U]: key extends U ? V : T[key] }
    : T
  : T
