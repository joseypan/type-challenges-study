// 【分析】
// 1、这道题有点类似于分组的概念，根据传入的数量，将数组进行分组
// 2、我们需要判断当前传入的U和T长度之间的关系，如果是小于这个值则可以继续遍历
// 3、ts能实现截取功能吗？
type CustomChunk<
  T extends any[],
  U extends number,
  R extends any[] = [],
> = T extends [infer start, ...infer other]
  ? R['length'] extends U
    ? [R, ...CustomChunk<T, U>]
    : CustomChunk<other, U, [...R, start]>
  : R extends []
  ? R
  : [R]
type TestChunk = CustomChunk<[1, 2, 3], 2>
