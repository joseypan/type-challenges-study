type EmptyTrim = '' | '\t' | '\n'
type Trim<S extends string> = S extends `${EmptyTrim}${infer X}${EmptyTrim}`
  ? Trim<X>
  : S
