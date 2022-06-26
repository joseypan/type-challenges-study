//【分析】
//1、根据测试用例可知，传入的泛型是一个函数，我们需要获取到函数参数的类型
//由之前获取到类型可以联想到infer,但是目前对于infer的使用还不是很清楚
// type A<T> = T extends Array<infer x> ? x : T
// type B = A<string[]>;
// type MyParameters<T extends (...args: any[]) => any> = T extends (
//   ...args: infer x
// ) => any
//   ? X
//   : []
//infer可以进行类型推断，比如我们不知道args的类型，则可以使用infer进行类型推断
