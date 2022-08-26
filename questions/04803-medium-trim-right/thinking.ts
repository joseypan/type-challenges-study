// 【分析】
// 1、这道题和之前写的移除左空格思维是类似的
// 2、只要判断字符串的组成是否是${infer R}和空格等组成的
// 3、一开始只写了空格，还有两个测试用例过不了，故补充了\t和\n
type CustomTrimRight<T extends string> = T extends `${infer R}${
  | ' '
  | '\n'
  | '\t'}`
  ? CustomTrimRight<R>
  : T
type TestTrimRight = CustomTrimRight<'   foo bar  \n\t '>
