// 【分析】
// 1、按照题目测试用例来看，这道题主要是需要遍历传入的对象，然后根据传入的泛型二的类型，决定哪些值不要
type CustomOmitByType<T extends { [key: string]: any }, U> = {
  [key in keyof T as T[key] extends U ? never : key]: T[key]
}
interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}
type TestOmitByType = CustomOmitByType<Model, boolean>
