// 【分析】
// 1、根据测试用例可知，类型接受三个泛型，泛型一是对象类型，泛型是联合类型，泛型三是需要替换的值

type CustomReplaceKeys<U extends {}, T extends keyof U, Y> = {
  [key in keyof U]: key extends T
    ? key extends keyof Y
      ? Y[key]
      : never
    : U[key]
}
