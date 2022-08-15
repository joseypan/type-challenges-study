type FlattenDepth<
  A extends any[],
  T extends number = 1,
  U extends number[] = [],
> = U['length'] extends T
  ? A
  : A extends any[]
  ? FlattenDepth<Flatten<A>, T, [...U, 1]>
  : A
