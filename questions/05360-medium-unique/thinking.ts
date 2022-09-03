// 【分析】
// 1、这道题主要是用来去重处理的，思路还是需要遍历数组
// 2、如何判断当前元素之前出现过呢？如果是js我们可以依托于新的数组或者是Map进行判断,是不是同样也可以用联合类型来处理呢
// 3、如果使用extends，string number这种类型，如果是一个数字/字符串判断都会算作true。肯定是不对的
// 4、参考之前的逻辑使用Equal类型？可是我们明显是一个联合类型
// 5、我们的目的无非是想要判断某一个值在数组中是否存在，可以自己再写一个类型吗？
type CustomUnique<T extends any[], U extends any[] = []> = T extends [
  infer start,
  ...infer other,
]
  ? IncludeEle<start, U> extends true
    ? CustomUnique<other, U>
    : CustomUnique<other, [...U, start]>
  : U
type CustomIncludeEle<T, U extends any[]> = U extends [
  infer start,
  ...infer other,
]
  ? Equal<start, T> extends true
    ? true
    : CustomIncludeEle<T, other>
  : false
type TestUnique = CustomUnique<
  [string, number, 1, 'a', 1, string, 2, 'b', 2, number]
>
