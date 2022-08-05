type Merge<
  F extends { [key: string]: any },
  S extends { [key: string]: any } = F,
> = {
  [key in keyof (F & S)]: key extends keyof F
    ? F[key]
    : key extends keyof S
    ? S[key]
    : never
}
