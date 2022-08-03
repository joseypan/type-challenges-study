// 【分析】
// 1、根据测试用例可知判断泛型一传入的字符串是否以泛型二传入的字符串结尾
// 2、今天题目比昨天难度高一点，是因为昨天只要从左到右对齐遍历即可，但是今天不是左对齐的，如何控制遍历的顺序呢
//当T遍历完应该是要拿之前的结果返回，若上一个结果是true则为true,上一个为false则为false,可是怎么拿上一次的遍历结果呢
type CustomEndsWith<
  T extends string,
  U extends string,
> = T extends `${infer tStart}${U}` ? true : false
type TestEndsWith = CustomEndsWith<'abc', 'bc'>
type TestEndsWith1 = CustomEndsWith<'abc', 'ac'>
