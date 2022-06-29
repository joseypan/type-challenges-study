//【分析】
// 根据测试用例可知当前类型传入一个泛型或者两个泛型均可，
// 若是传入一个泛型则和将所有的接口字段都改成readonly
// 若是传入两个泛型则需要遍历接口字段，判断当前字段是否继承泛型二，若继承则加readonly若不继承则保持现状

// 目前问题是我们需要根据泛型数量进行判断，如何获取到泛型数量呢？
// 1、而且测试用例使用MyReadonly类型的时候有的传入一个泛型，有的传入两个泛型，目前传入一个会报错需要传入两个，如何保证第二个是选填的泛型呢
// 给泛型二赋值默认值即可，和函数一样
// type MyReadonly2<T, K = never> = any
// 2、判断泛型二的类型
// 这里的思路是判断泛型二是否继承never,如果继承never类型说明没有传入第二个泛型，则和之前写的readonly的效果一致
// 如果不继承never,则需要判断当前的D是否继承于K,若继承则是readonly,若不是则不处理

//通过看解析之后需要判断泛型二是否继承keyof 泛型一，然后再利用取并集的方式实现readonly
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [D in keyof T]: T[D]
// } & { [D in Exclude<keyof T, K>]: T[D] }
