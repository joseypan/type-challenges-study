type Empty = '' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Empty}${infer X}`
  ? TrimLeft<X>
  : S
