// 【分析】
// 1、按照测试用例来说，我们需要把传入的接口类型进行遍历，并且转成一个数组类型的联合类型。数组的第一项是key,数组的第二项是value
// 2、问题在于如何把遍历的内容进行抽离？如何组成一个联合类型？通过|？
// 可以直接通过[U,T[U]]来实现联合类型
// 但是测试用例有一个未通过，需要将所有的可选类型转成非可选类型，如何转呢
// 通过类型是否属于infer Rest|undefined来判断是否是可选参数，如果是可选参数则去掉undefined类型
type CustomObjectEntries<
  T extends { [key: string]: any },
  U = keyof T,
> = U extends keyof T
  ? [U, T[U] extends infer Rest | undefined ? Rest : T[U]]
  : never

interface Model {
  name: string
  age: number
  locations: string[] | null
}
type TestObjectEntries = CustomObjectEntries<Model>
