// 【分析】
// 1、根据测试用例，其实不太清楚这个如何处理
// 2、查看题目相关说明：exclude the index signature from object types.
// 排除对象是索引符号的类型，如何理解这个索引号
// https://basarat.gitbook.io/typescript/type-system/index-signatures
type CustomRemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K]
}
