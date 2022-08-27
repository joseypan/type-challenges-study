// 【分析】
// 1、按照题干的意思是说我们需要判断一个数组是否是元组
// 2、分析元组的定义：长度固定，且类型需要声明
// 首先判断传入的是否是数组类型，如果不是数组类型直接就是false了
// 需要确定传入number[]和[number]的区别是什么,T['length']返回值不同
type CustomIsTuple<T> = [T] extends [never]
  ? false
  : T extends any[] | readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false
type TestIsTuple = CustomIsTuple<number[]>
// T extends Array<any>
//   ? T extends []
//     ? true
//     : number extends T['length']
//     ? false
//     : true
//   : false
