type IsUnion<T, D = T> = IsNever<T> extends true
  ? false
  : T extends T
  ? [D] extends [T]
    ? false
    : true
  : false
