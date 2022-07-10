type MyCapitalize<S extends string> = S extends `${infer x}${infer y}`
  ? `${Uppercase<x>}${y}`
  : ''
