type Mutable<T extends { [key: string]: any }> = T extends string
  ? never
  : T extends number
  ? never
  : { -readonly [key in keyof T]: T[key] }
