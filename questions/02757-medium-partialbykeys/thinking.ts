// 【分析】
// 1、传入两个泛型，泛型一传入一个对象，泛型二传入联合类型
// 2、需要遍历泛型一，判断当前key是否继承于泛型二，如果继承的话表示这个值要变成可选参数，
// 3、如何将一个对象的某一项变成可选参数呢，可以使用官方的partial吗？
// 4、是否可以利用对象的合并特性，将处理后的对象与原对象进行合并处理(好像是可以通过测试用例的)

type CustomPartialByKeys<T, K extends keyof T> = T & {
  [key in keyof T as key extends K ? key : never]?: T[key]
}
interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}
type TestPartialByKeys = CustomPartialByKeys<User, 'name'>
