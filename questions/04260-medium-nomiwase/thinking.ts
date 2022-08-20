// 【分析】
// 1、根据题干的意思，我们需要对传入的字符串进行组合

type CustomAllCombinations<
  S extends string,
  U extends string = StringToUnion<S>,
> = [U] extends [never]
  ? ''
  : '' | { [K in U]: `${K}${CustomAllCombinations<never, Exclude<U, K>>}` }[U]
type TestAllCombinations = CustomAllCombinations<'ABC'>
