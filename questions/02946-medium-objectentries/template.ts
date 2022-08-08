type ObjectEntries<
  T extends { [key: string]: any },
  U = keyof T,
> = U extends keyof T
  ? [U, T[U] extends infer Rest | undefined ? Rest : T[U]]
  : never
