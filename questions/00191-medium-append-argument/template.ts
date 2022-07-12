type AppendArgument<Fn, A> = Fn extends (...arg: infer argument) => infer R
  ? (...arg: [...argument, A]) => R
  : never
