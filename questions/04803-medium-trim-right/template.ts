type TrimRight<T extends string> = T extends `${infer R}${' ' | '\t' | '\n'}`
  ? TrimRight<R>
  : T
