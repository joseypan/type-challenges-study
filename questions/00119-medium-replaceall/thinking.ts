// 【分析】
// 1、按照测试用例可知，类型传入三个类型
// 2、类型一为需要处理的字符串
// 3、类型二为匹配的字符串
// 4、类型三为匹配之后需要替换成的字符串

type CustomReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = From extends ''
  ? S
  : S extends `${infer start}${From}${infer end}`
  ? `${start}${To}${CustomReplaceAll<end, From, To>}`
  : S
