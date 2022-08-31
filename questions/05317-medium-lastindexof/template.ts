type LastIndexOf<
  T extends any[],
  U extends number,
  Len extends number[] = [],
  Res extends number[] = [],
> = T extends [infer Start, ...infer R]
  ? Equal<Start, U> extends true
    ? LastIndexOf<R, U, [...Len, 1], [...Len]>
    : LastIndexOf<R, U, [...Len, 1], Res>
  : Res['length'] extends 0
  ? -1
  : Res['length']
