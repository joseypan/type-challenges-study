type IndexOf<T extends any[], U, R extends number[] = []> = T extends [
  infer start,
  ...infer other,
]
  ? Equal<start, U> extends true
    ? R['length'] extends 0
      ? -1
      : R['length']
    : IndexOf<other, U, [...R, 1]>
  : -1
