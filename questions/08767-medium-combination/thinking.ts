// 【分析】
// 1、这道题按照题意来看基本上是要将数组中的所有元素都组合成联合类型,是一道组合题
type CustomCombination<
  T extends string[],
  A = T[number],
  U = A,
> = U extends infer I extends string
  ? I | `${I} ${CustomCombination<[], Exclude<A, I>>}`
  : never
