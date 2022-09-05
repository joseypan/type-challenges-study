// 【分析】
// 1、按照题干含义来说应该是想要根据我们传入的数字决定所得的联合类型
// 2、我们给类型定义几个默认值，用来统计当前遍历的数字和已经收集的数字
// 3、大致思路是我们给定一个变量Flag,初始值是false。我们就要开启一个遍历过程，若Flag为true则表示要收集，
// 4、由于初始值为false，所以要考虑什么情况下会为true。当我们要遍历的值已经到了要收集的值时，我们需要将标识改为true
type CustomNumberRange<
  T extends number,
  U extends number,
  K extends number[] = [],
  R extends number[] = [],
  Flag extends boolean = false,
> = Flag extends true
  ? K['length'] extends U
    ? [...R, U][number]
    : CustomNumberRange<T, U, [...K, 1], [...R, K['length']], Flag>
  : K['length'] extends T
  ? CustomNumberRange<T, U, [...K, 1], [...R, K['length']], true>
  : CustomNumberRange<T, U, [...K, 1], R, Flag>

type TestNumberRange = CustomNumberRange<2, 9>
