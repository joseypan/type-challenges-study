type Trunc<T extends number | string> =
  `${T}` extends `${infer count}.${infer decimal}` ? count : `${T}`
