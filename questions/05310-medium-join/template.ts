type Join<T extends string[], U extends string> = T extends [
  infer S extends string,
  ...infer R extends string[],
]
  ? R['length'] extends 0
    ? S
    : `${S}${U}${Join<R, U>}`
  : ''
