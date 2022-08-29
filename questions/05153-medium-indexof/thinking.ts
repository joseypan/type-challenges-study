// 【分析】
// 1、按照题干的含义可知，当前题需要找到元素在数组中第一次出现的索引值，若有则返回索引值，若没有则返回-1
// 目前这种写法针对于数组都是数字类型没有问题，但是有其他类型好像不太对
// 例如：我遍历到1的时候，他校验1 extends number是true
// 像这种情况，如何让它进行匹配呢？如果它是一个类型，就变得不准确了
// 想到转字符串去比较，但是好像报错了
// 如何判断两个值相等呢？可以借助Equal类型
type CustomIndexOf<T extends any[], U, R extends number[] = []> = T extends [
  infer start,
  ...infer other,
]
  ? Equal<start, U> extends true
    ? R['length'] extends 0
      ? -1
      : R['length']
    : CustomIndexOf<other, U, [...R, 1]>
  : -1
type TestIndexof = CustomIndexOf<[string, 1, number, 'a'], number>
