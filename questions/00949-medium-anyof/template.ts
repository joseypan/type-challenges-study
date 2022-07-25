type NoneEmptyArray<T extends any[]> = T[number] extends never ? false : true
type NoneEmptyObject<T extends {}> = keyof T extends '' ? false : true
type NoneEmptyNumber<T> = T extends 0 ? false : true
type NoneEmptyString<T> = T extends '' ? false : true
type NoneEmptyBoolean<T> = T extends false ? false : true
type NotEmpty<T> = T extends number
  ? NoneEmptyNumber<T>
  : T extends string
  ? NoneEmptyString<T>
  : T extends boolean
  ? NoneEmptyBoolean<T>
  : T extends []
  ? NoneEmptyArray<T>
  : T extends {}
  ? NoneEmptyObject<T>
  : false
type AnyOf<T extends readonly any[]> = T extends [infer start, ...infer other]
  ? NotEmpty<start> extends true
    ? true
    : AnyOf<other>
  : false
