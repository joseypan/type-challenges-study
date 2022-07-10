// 【分析】
// 1、按照测试用例可知我们需要将传入的字符串类型进行第一位转成大写
// 2、首先的问题是提取第一个字符
// 3、ts转大写用什么方式呢？js可以使用toUpperCase的api，但是ts不是很清楚
//解释：ts中有内置的类型转大写，Uppercase
type CustomCapitalize<S extends string> = S extends `${infer x}${infer y}`
  ? `${Uppercase<x>}${y}`
  : ''
type customType = CustomCapitalize<''>
// 这样的结果在碰到空字符串的时候报错，如何解决呢？
// 特殊情况改成空字符串即可
