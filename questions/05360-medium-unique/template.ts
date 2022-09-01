type Unique<T extends any[], U extends any[] = []> = T extends [
  infer start,
  ...infer other,
]
  ? IncludeEle<start, U> extends true
    ? CustomUnique<other, U>
    : CustomUnique<other, [...U, start]>
  : U
type IncludeEle<T, U extends any[]> = U extends [infer start, ...infer other]
  ? Equal<start, T> extends true
    ? true
    : IncludeEle<T, other>
  : false
