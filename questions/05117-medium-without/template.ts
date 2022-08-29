type Without<T extends any[], U extends number | any[]> = T extends [
  infer start,
  ...infer other,
]
  ? [
      ...(U extends number
        ? start extends U
          ? []
          : [start]
        : U extends any[]
        ? IncludesEle<U, start> extends true
          ? []
          : [start]
        : []),
      ...Without<other, U>,
    ]
  : []
type IncludesEle<T extends any[], R> = T extends [infer start, ...infer other]
  ? start extends R
    ? true
    : IncludesEle<other, R>
  : false
