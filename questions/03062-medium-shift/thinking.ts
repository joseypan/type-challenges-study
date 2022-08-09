// 【分析】
// 1、这道题是用来去除数组中的第一项的，思考方式和获取到数组第一项是一致的
// 相对来说还是比较简单的

type CustomShift<T> = T extends [infer start, ...infer other]
  ? [...other]
  : never

type TestShift = CustomShift<['a', 'b', 'c']>
