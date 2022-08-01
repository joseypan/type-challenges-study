// 【分析】
// 1、根据测试用例可知类型传入两个泛型，泛型一是一个对象类型，泛型二可以是任意类型
// 2、遍历泛型一，判断当前值只不是继承于泛型二，若继承则保留，若不继承则舍弃
// [疑问]如何将对象中的某一项移除？判断要不要得在key中判断 需要借助as做推断，后面接条件
interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}
type CustomPickByType<T, U> = T extends { [key: string]: any }
  ? {
      [key in keyof T as T[key] extends U ? key : never]: T[key]
    }
  : never
type TestPickerByType = CustomPickByType<Model, boolean>
