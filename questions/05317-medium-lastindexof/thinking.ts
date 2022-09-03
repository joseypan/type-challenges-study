// 【分析】
// 1、这道题和indexOf有异曲同工之妙
// 下面写法如果都是数字类型已经通过测试了，但是针对于一些类型等就会有问题。之前好像是统一转字符串处理的
// 但是Start转字符串会报错
// Equal<Start, U> extends true 还是需要借助于Equal类型

// type CustomLastIndexOf<
//   T extends any[],
//   U extends number,
//   Len extends number[] = [],
//   Res extends number[] = [],
// > = T extends [infer Start, ...infer R]
//   ? Start extends U
//     ? CustomLastIndexOf<R, U, [...Len, 1], [...Len]>
//     : CustomLastIndexOf<R, U, [...Len, 1], Res>
//   : Res['length'] extends 0
//   ? -1
//   : Res['length']
// type TestLastIndexOf = CustomLastIndexOf<[0, 0, 0], 2>

type CustomLastIndexOf<
  T extends any[],
  U extends number,
  Len extends number[] = [],
  Res extends number[] = [],
> = T extends [infer Start, ...infer R]
  ? Equal<Start, U> extends true
    ? CustomLastIndexOf<R, U, [...Len, 1], [...Len]>
    : CustomLastIndexOf<R, U, [...Len, 1], Res>
  : Res['length'] extends 0
  ? -1
  : Res['length']
type TestLastIndexOf = CustomLastIndexOf<[0, 0, 0], 2>
