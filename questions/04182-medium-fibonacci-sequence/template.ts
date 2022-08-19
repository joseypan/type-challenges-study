type Fibonacci<
  T extends number,
  Num extends number[] = [1],
  Res extends number[] = [1],
  Cur extends number[] = [1],
> = Num['length'] extends T
  ? Res['length']
  : Fibonacci<T, [...Num, 1], Cur, [...Res, ...Cur]>
