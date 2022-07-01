// 【分析】
// 1、根据题意可知需要将元组中的所有项组合成联合类型
// 2、获取元组中的所有项，应该可以考虑[...refer X]去提取出来
// 3、如何把提取出来的内容整合成联合类型呢？
// 使用T[number]获取到每一项，然后会自动表示成联合类型

// type TupleToUnion<T> = T extends [...infer x] ? T[number] : never
// 最终结果：

// type TupleToUnion<T> = T extends Array<any> ? T[number] : never
