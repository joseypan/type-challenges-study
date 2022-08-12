// 【分析】
// 1、从测试用例可知，当前类型的主要用处是将数组中的内容进行翻转
type CustomReverse<T extends Array<any>> = T extends [...infer K, infer R]
  ? [R, ...CustomReverse<K>]
  : T
type TestReverse = CustomReverse<['a', 'b']>
