// 【分析】
// 1、按照测试用例和readme文档题干可知，这道题是要判断传入的数组中的每一项，只要有一项的值是true就返回true,否则遍历完成返回false
// ts如何遍历数组list[number]
// {a:'name'}对象有值的情况是继承于{},如何才能判断出是空对象呢？
// type NoneEmptyArray<T extends any[]> = T[number] extends never ? false : true
// type NoneEmptyObject<T extends {}> = keyof T extends '' ? false : true
// type NoneEmptyNumber<T> = T extends 0 ? false : true
// type NoneEmptyString<T> = T extends '' ? false : true
// type NoneEmptyBoolean<T> = T extends false ? false : true
// type NotEmpty<T> = T extends number
//   ? NoneEmptyNumber<T>
//   : T extends string
//   ? NoneEmptyString<T>
//   : T extends boolean
//   ? NoneEmptyBoolean<T>
//   : T extends []
//   ? NoneEmptyArray<T>
//   : T extends {}
//   ? NoneEmptyObject<T>
//   : false
// type CustomAnyOf<T extends readonly any[]> = T extends [
//   infer start,
//   ...infer other,
// ]
//   ? NotEmpty<start> extends true
//     ? true
//     : CustomAnyOf<other>
//   : false
// type TestAnyOf = CustomAnyOf<['', true]>

// type TestData = 'a' extends '' ? true : false
