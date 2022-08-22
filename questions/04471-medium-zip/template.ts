type Zip<T extends unknown[], U extends unknown[]> = T extends [
  infer Tstart,
  ...infer Tother,
]
  ? U extends [infer Ustart, ...infer Uother]
    ? [[Tstart, Ustart], ...Zip<Tother, Uother>]
    : []
  : []
