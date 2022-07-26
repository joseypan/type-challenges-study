// 【分析】
// 1、判断类型是否为联合类型？
// 2、联合类型具有哪些特点？还是说需要把其他类型都判断为不是，则是联合类型
//【不理解】这道题不会
// 按照解题思路来说
// 1、判断类型是不是never类型，如果是never类型则直接返回false
// 2、判断T是不是T类型，ts在什么情况下，自己不等于自己？
// 看下来好像都符合，不是很理解这个判断
// 包括后面这个判断也不是很理解
type UnionType = 'a'
type TestUnion<T> = T extends T ? true : false
type TestUnion1 = TestUnion<UnionType>
type CustomIsUnion<T, D = T> = IsNever<T> extends true
  ? false
  : T extends T
  ? [D] extends [T]
    ? false
    : true
  : false
