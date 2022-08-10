// 【分析】
// 1、根据测试用例可知，我们需要传入两个泛型
// 2、需要根据泛型一是否是空数组进行判断
//   若泛型一为空数组，则直接返回泛型二的类型
//   若泛型二不为空数组，则需要将数组进行遍历，然后组成嵌套的对象，首先数组是一个字符串数组，不然拼接为对象会有问题应该
// 3、解构出来的数组第一项如何作为对象的key呢？
// Properkey是什么？
type CustomTupleToNestedObject<T, U> = T extends [infer start, ...infer other]
  ? {
      [key in start as start extends PropertyKey
        ? start
        : never]: CustomTupleToNestedObject<other, U>
    }
  : U
type TestTupleToNestedObject = CustomTupleToNestedObject<['a', 'b'], string>
// { start: CustomTupleToNestedObject<other, U> }
// { start: U }
