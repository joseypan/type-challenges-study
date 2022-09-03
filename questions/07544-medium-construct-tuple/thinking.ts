// 【分析】
// 1、这道题按照题干的意思是要创建一个指定长度的元组
// https://github.com/type-challenges/type-challenges/issues/14153
type CustomConstructTuple<
  L extends number,
  U extends unknown[] = [],
> = L extends 1000
  ? never
  : U['length'] extends L
  ? U
  : CustomConstructTuple<L, [...U, unknown]>
