// 【分析】
// 1、根据测试用例可知，类型会传入三个泛型，泛型一是对象类型，泛型二因为是key所以是字符串类型，泛型三可以是any类型
// 2、如何限定类型就是对象类型,可以使用Record类型，泛型一传入key的类型，泛型二传入value的类型
// 3、如何将两个对象进行合并

type Customtest1 = {
  key: 'cat'
  value: 'green'
}

type CustomtestExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type CustomAppendToObject<T extends Object, U, V> = T extends Record<
  string,
  any
>
  ? U extends string
    ? { [key in keyof T | U]: key extends U ? V : T[key] }
    : T
  : T
type TestAppendToObject = CustomAppendToObject<Customtest1, 'home', boolean>
