// 【分析】
// 1、这道题主要是将数组中的每一项根据传入第二个字符串进行拼接
// https://github.com/type-challenges/type-challenges/issues/14125
type CustomJoin<T extends string[], U extends string> = T extends [
  infer S extends string,
  ...infer R extends string[],
]
  ? R['length'] extends 0
    ? S
    : `${S}${U}${CustomJoin<R, U>}`
  : ''
type TestJoin = CustomJoin<['a', 'p', 'p', 'l', 'e'], '-'>
