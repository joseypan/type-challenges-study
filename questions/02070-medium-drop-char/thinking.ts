// 【分析】
// 1、按照题目含义可知，当前题目是需要根据第二个泛型的值决定第一个泛型传入字符串需要替换的内容
// 2、根据观察可知，我们需要判断第二个泛型是不是继承''|' '，如果继承就直接不占位，如果不是继承就需要替换成''

type CustomDropChar<
  S extends string,
  C extends string,
> = S extends `${infer start}${infer other}`
  ? start extends C
    ? `${CustomDropChar<other, C>}`
    : `${start}${CustomDropChar<other, C>}`
  : S
type TestDropChar = CustomDropChar<'butter fly!', '!'>

type TestEmpty<S extends string> = S extends ' ' | '' ? 'kong' : 'none'
type ExampleEmpty = TestEmpty<''>
