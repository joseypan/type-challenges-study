// 【分析】
// 1、根据题目分析可知，当前题目主要是用于处理只读内容转为非只读内容
// 2、根据题意来说我们如果传入数字和字符串会报错，所以我们需要判断传入T的类型，若是字符串或者数字则应该是never类型
// 3、如何考虑将readonly属性去除呢？-readonly
type CustomMutable<T extends { [key: string]: any }> = T extends string
  ? never
  : T extends number
  ? never
  : { -readonly [key in keyof T]: T[key] }

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
type TestMutable = CustomMutable<Readonly<Todo1>>
