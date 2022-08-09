type Shift<T> = T extends [infer start, ...infer other] ? [...other] : never
