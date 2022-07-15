type Flatten<T extends any[], D extends any[] = []> = [...T, ...D] extends [
  infer start,
  ...infer other,
]
  ? start extends any[]
    ? [...Flatten<start>, ...Flatten<other>]
    : [start, ...Flatten<other>]
  : [...T, ...D]
