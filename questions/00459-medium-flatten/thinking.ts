// 【分析】
// 1、根据测试用例可知，flatten类型传入两个泛型，且泛型二有默认值为[]
// 2、需要遍历第一个泛型和第二个泛型中的所有元素，判断类型是否继承于[],如果继承则需要递归调用进行元素提取

type CustomFlatten<T extends any[], D extends any[] = []> = [
  ...T,
  ...D,
] extends [infer start, ...infer other]
  ? start extends [infer a]
    ? [...CustomFlatten<start>, ...CustomFlatten<other>]
    : [start, ...CustomFlatten<other>]
  : T
// extends [infer start,...infer other]?start extends []?[CustomFlatten<start>,...CustomFlatten<other>]:[start,...CustomFlatten<other>]:T
type TestFlatten = CustomFlatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>
type TestFlatten1 = CustomFlatten<[1, 2, [3, 4], [[[5]]]]>
