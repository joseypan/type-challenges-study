// 【分析】
// 1、根据测试用例可知这道题需要判断当前类型是否是never类型
// 2、不太清楚如何判断never类型
// 3、传入的类型不太确定，有可能还是联合类型
// 看issue答案的结果是[T] extends [never]，没有懂为什么
type CustomIsNever<T> = T extends never ? true : false
type TestIsNever = CustomIsNever<never>
