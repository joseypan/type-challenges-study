// 【分析】
// 1、按照测试用例可知，类型传入三个泛型
// 2、泛型一是传入需要处理的字符串
// 3、泛型二传入的是匹配的字符串
// 4、泛型三是匹配到字符串后需要替换为的字符串

type CustomReplace<
  S extends string,
  From extends string,
  To extends string,
> = From extends ''
  ? S
  : S extends `${infer start}${From}${infer end}`
  ? `${start}${To}${end}`
  : S
