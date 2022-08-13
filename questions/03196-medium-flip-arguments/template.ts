type FlipArguments<T> = T extends (...arg: infer A) => infer Return
  ? (...arg: Reverse<A>) => Return
  : T
