// 【分析】
// 1、按照测试用例可知，类型传入一个泛型，需要根据泛型进行遍历排列组合
// 当泛型传入的是never，则返回空字符串
// 关键是在于如果不是never，则需要对值进行提取，并且要组成新的数组
// 巧妙的点在于引入了另一个泛型作为判断，其实不太理解T extends U的作用是什么？
// T一定是作为当前项，然后结合排除当前项的其他项，这样组成一个数组集合
// 这道题自己确实想不到，感觉类似于递归操作的都不太能想到
type CustomPermutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...CustomPermutation<Exclude<U, T>>]
  : []
// type CustomPermutation<T> = T
type TestPermutation = CustomPermutation<'a' | 'b'>
