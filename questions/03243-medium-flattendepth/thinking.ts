// 【分析】
// 1、按照测试用例可知，当前类型主要是传入一个数组以及递归次数。根据递归次数将数组进行展平处理
// 2、难点在于如何控制次数，感觉可以递归的时将次数也进行传入，判断当前次数是否大于0，如果大于0则判断类型是否是数组类型，是则继续递归，次数减一，否则直接输出
// 3、不好直接控制数字的加一，其采用了数组的长度这种方式
type CustomFlattenDepth<
  A extends any[],
  T extends number = 1,
  U extends number[] = [],
> = U['length'] extends T
  ? A
  : A extends any[]
  ? CustomFlattenDepth<Flatten<A>, T, [...U, 1]>
  : A
