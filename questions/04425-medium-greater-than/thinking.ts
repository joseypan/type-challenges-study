// 【分析】
// 1、这道题根据题干可知传入两个数字类型的数据，需要比较前一个数字是否大于后一个数字，若是大于则返回true若不大于（小于或等于）返回false
// 2、感觉可以从位数着手，如果说T的位数大于U，那么一定是T更大的，如果位数相同则需要对位比较。
// 3、但是即使是同一位的数又怎么比较大小呢
// 4、在ts中是没有数字加减乘除的概念的，表示数字必需依托一个数组，通过数组的长度来进行判断
type CustomBuildArray<
  S extends number,
  C extends number = 1,
  Arr extends number[] = [],
> = Arr['length'] extends S ? Arr : BuildArray<S, C, [...Arr, 1]>
type CustomGreaterThan<
  T extends number,
  U extends number,
> = BuildArray<T> extends [...arr1: BuildArray<U>, ...arr2: infer other]
  ? other extends []
    ? false
    : true
  : false
type TestGreaterThan = CustomGreaterThan<5, 5>
