type BuildArray<
  S extends number,
  C extends number = 1,
  Arr extends number[] = [],
> = Arr['length'] extends S ? Arr : BuildArray<S, C, [...Arr, 1]>
type GreaterThan<T extends number, U extends number> = BuildArray<T> extends [
  ...arr1: BuildArray<U>,
  ...arr2: infer other,
]
  ? other extends []
    ? false
    : true
  : false
