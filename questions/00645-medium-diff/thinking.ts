// 【分析】
// 1、根据测试用例可知，当前题目是需要核对出两个对象的差异组成一个新的对象
// 问题在于如何比较出差异呢？思路是否是合并两个类型进行遍历，若某一个key在两个里面都包含则不需要，若只在其中一个包含则保留
type CustomDiff<
  O extends { [key: string]: any },
  O1 extends { [key: string]: any },
> = O extends O1
  ? O1 extends O
    ? {}
    : { [key in keyof Omit<O, keyof O1>]: O[key] }
  : O1 extends O
  ? { [key in keyof Omit<O1, keyof O>]: O1[key] }
  : {
      [K in
        | keyof Omit<O1, keyof O>
        | keyof Omit<O, keyof O1>]: K extends keyof O
        ? O[K]
        : K extends keyof O1
        ? O1[K]
        : never
    }
type CustomFoo = {
  name: string
  age: string
}
type CustomBar = {
  name: string
  age: string
  gender: number
}
type CustomCoo = {
  name: string
  gender: number
}
type TestDiff = CustomDiff<CustomFoo, CustomBar>
