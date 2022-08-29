// 【分析】
// 1、根据题意可知这道题应该是要提取整数部分的内容，但是传入的内容可能是字符串也有可能是数字。这样就比较麻烦一点了
// 2、可以换成简单一点的思路，直接转成字符串，然后用字符串匹配的方式就可以完成
type CustomTrunc<T extends number | string> =
  `${T}` extends `${infer count}.${infer decimal}` ? count : `${T}`
type TestTrunc = CustomTrunc<-12.34>
