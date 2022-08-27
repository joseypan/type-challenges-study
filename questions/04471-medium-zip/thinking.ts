// 【分析】
// 1、根据题意可知，当前题目主要是将传入的两个数组进行遍历，对应索引的组成一个新的值

type CustomZip<T extends unknown[], U extends unknown[]> = T extends [
  infer Tstart,
  ...infer Tother,
]
  ? U extends [infer Ustart, ...infer Uother]
    ? [[Tstart, Ustart], ...CustomZip<Tother, Uother>]
    : []
  : []
type TestZip = CustomZip<['1', '2'], [1, 2]>
