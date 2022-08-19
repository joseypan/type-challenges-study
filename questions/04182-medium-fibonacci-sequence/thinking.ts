// 【分析】
// 1、这道题看题干说明的意思是一道斐波那契数列题
// 2、如何像js中一样计算出相应的数量呢？
// 3、在ts中好像没有加和减的概念，需要依托数组长度来实现

import { Resolver } from 'dns'

// 4、题目传入的是次数，也等同于我们的递归次数，所以我们得使用一个Num来记录递归的次数，当递归次数已经达到传入的次数，则说明可以跳出,Num只是用来纯粹计数的
type CustomFibonacci<
  T extends number,
  Num extends number[] = [1],
  Res extends number[] = [1],
  Cur extends number[] = [1],
> = Num['length'] extends T
  ? Res['length']
  : CustomFibonacci<T, [...Num, 1], Cur, [...Res, ...Cur]>
type TestFibonacci = CustomFibonacci<2>
