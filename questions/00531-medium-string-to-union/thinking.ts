// 【分析】
// 1、按照测试用例来看，这道题需要对字符串进行分解，如果是空字符串则返回never

type CustomStringToUnion<T extends string> =
  T extends `${infer start}${infer other}`
    ? start | CustomStringToUnion<other>
    : never
type TestStringToUnion = CustomStringToUnion<''>
type TestStringToUnion2 = CustomStringToUnion<'hellow'>
