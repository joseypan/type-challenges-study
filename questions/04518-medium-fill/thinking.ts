// 【分析】
// 1、根据测试用例猜测（此题的题干没有说清楚），这个类型接收四个参数，参数一是被替换元素的元组，参数二是要被替换成的内容，参数三（可选）起始索引，参数四（可选）截止索引（不包含）
// 2、这道题的核心在于什么时候替换？我们知道ts中没有办法直接进行数字计算和比较的，必须依托于数组长度
// 3、什么情况不满足[infer AbortController,...infer R]?
// 空数组不满足
// 当传入的为空数组时，说明已经遍历完成了
// 我们必须注册一个标志，当标志为true的时候，就知道可以开始替换了
// 默认这个标志是当它达到start的时候才变为true
// 现在这个时候End还没有排上用场，我们知道当索引等于End的时候，我们就不用替换了
// 所以当我们满足这个条件的时候，就说明还在继续遍历，继续遍历的话我们需要判断Count的长度是否等于传入的Start
// 当其已经达到End索引的时候，就也同样结束遍历
type CustomFill<
  T extends any[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends number[] = [],
  Flag extends boolean = Count['length'] extends Start ? true : false,
> = Count['length'] extends End
  ? T
  : T extends [infer A, ...infer R]
  ? Flag extends true
    ? [N, ...CustomFill<R, N, Start, End, [...Count, 1], true>]
    : [A, ...CustomFill<R, N, Start, End, [...Count, 1]>]
  : T
type TestFill = CustomFill<[1, 2, 3], true, 0, 1>
