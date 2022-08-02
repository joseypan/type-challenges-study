// 【分析】
// 1、根据测试用例可知，这道题的类型传入两个类型，并且判断第一个传入的字符串是否以第二个传入的字符串开头的
// 2、如果是以第二个开头则返回true，否则返回false
// 3、要实现匹配，肯定也是根据infer进行字符串的提取
// 还要考虑递归的结束条件，当U不是字符串的时候应该结束，但是结束时候要用之前的判断结果
// 能够直接判断U extends `${infer x}${infer y}`作为结束条件的原因是传入的是字符串，应该都是符合要求的，只有当最后情况才不满足，所以当走到这的时候一定是前面都满足要求，直接返回true即可
type CustomStartsWith<
  T extends string,
  U extends string,
> = T extends `${infer TStart}${infer TEnd}`
  ? U extends `${infer UStart}${infer UEnd}`
    ? TStart extends UStart
      ? CustomStartsWith<TEnd, UEnd>
      : false
    : true
  : false
type TestStartWith = CustomStartsWith<'abc', 'ac'>
type TestStartWith1 = CustomStartsWith<'abc', 'ab'>
