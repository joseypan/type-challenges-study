// 【分析】
// 1、这道题和昨天的解题思路应该是一致的，也是通过对象合并可以解决的,或者合并包含的和不包含的

type CustomRequiredByKeys<T, K extends keyof T> = T & {
  [key in keyof T as key extends K ? never : key]: T[key]
}
