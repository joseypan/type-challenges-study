type Diff<
  O extends { [key: string]: any },
  O1 extends { [key: string]: any },
> = O extends O1
  ? O1 extends O
    ? {}
    : { [key in keyof Omit<O, keyof O1>]: O[key] }
  : O1 extends O
  ? { [key in keyof Omit<O1, keyof O>]: O1[key] }
  : {
      [K in
        | keyof Omit<O1, keyof O>
        | keyof Omit<O, keyof O1>]: K extends keyof O
        ? O[K]
        : K extends keyof O1
        ? O1[K]
        : never
    }
