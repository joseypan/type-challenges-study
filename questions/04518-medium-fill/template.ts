type Fill<
  T extends any[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends number[] = [],
  Flag extends boolean = Count['length'] extends Start ? true : false,
> = Count['length'] extends End
  ? T
  : T extends [infer A, ...infer R]
  ? Flag extends true
    ? [N, ...Fill<R, N, Start, End, [...Count, 1], true>]
    : [A, ...Fill<R, N, Start, End, [...Count, 1]>]
  : T
