// 【分析】
// 1、根据测试用例可知，option方法充当一个收集器，需要把所有通过option调用的内容都放入接口类型中
// 如果是js的话大概思路是这样的
// const map = new Map()
// function option(a, b) {
//   if (map.has(a)) return
//   if (typeof b === Object) {
//     for (let key in b) {
//       option(key, b[key])
//     }
//   } else {
//     map.set(a, typeof b)
//   }
// }

// 同样转换成ts中，我们也需要使用一个对象进行收集
// 对象作为类型的泛型传入，默认是空对象
type AB<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V,
  ): AB<T & { [k in K]: V }>
  get(): T
}
