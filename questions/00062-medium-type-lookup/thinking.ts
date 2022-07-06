// 【分析】
// 1、类型传入两个泛型，泛型一为联合类型，泛型二为字符串
// 如何遍历联合类型，现在想要获取到U['type']的值
//首先进行判断，传入的T是不是属于type中的值，如果不存在则直接返回never报错，如果存在则需要遍历联合类型判断type是不是等于当前传入的内容，等于则返回，不等于则不添加
// 直接判断U是不是属于type类型是T的，如果是则保留，不是则never
// 感觉在ts中去除也是用never来实现的，感觉自己还是有点不太理解
// type AACA<U extends { type: string }, T extends string> = T extends U['type']
//   ? U extends { type: T }
//     ? U
//     : never
//   : never

// interface Cat {
//   type: 'cat'
//   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
// }

// interface Dog {
//   type: 'dog'
//   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
//   color: 'brown' | 'white' | 'black'
// }

// type Animal = Cat | Dog
// type AACAB = AACA<Animal, 'dog'>

// type UnionType = 'aaaa' | 'bbbb'
// type TypeA = 'aaaa'
// type TestType = TypeA extends UnionType ? true : false
