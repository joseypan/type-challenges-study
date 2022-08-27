// 【分析】
// 1、这道题根据题干可知，是需要筛选出不属于数组二的内容
type CustomWithout<T extends any[], U extends number | any[]> = T extends [
  infer start,
  ...infer other,
]
  ? [
      ...(U extends number
        ? start extends U
          ? []
          : [start]
        : U extends any[]
        ? HasEle<U, start> extends true
          ? []
          : [start]
        : []),
      ...CustomWithout<other, U>,
    ]
  : []
type HasEle<T extends any[], R> = T extends [infer start, ...infer other]
  ? start extends R
    ? true
    : HasEle<other, R>
  : false
type TestWithout = CustomWithout<[1, 2, 3], [1, 2]>
