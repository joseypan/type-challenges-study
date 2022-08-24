type Chunk<
  T extends any[],
  U extends number,
  R extends any[] = [],
> = T extends [infer start, ...infer other]
  ? R['length'] extends U
    ? [R, ...Chunk<T, U>]
    : Chunk<other, U, [...R, start]>
  : R extends []
  ? R
  : [R]
