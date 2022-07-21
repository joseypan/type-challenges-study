// 【分析】
// 1、按照测试用例可知，需要将驼峰命名更改为-连接符
// 2、思路大致是遍历字符串，然后如果字符串是大写，则转成-和其小写
// 3、如何维护一个大小写的对应关系类型，此题有点类似于大小写那道题，是否可以参考一下呢？
// 4、判断是否为大写一定是使用extends一个联合类型判断的，但是如何找到其对应关系呢（使用对象？）
// 5、ts内置有Uppercase和Lowercase类型做数据大小写转换，这样就相对容易了
// 6、按照统一的规则来说，第一项也会加上-,如何去除第一个-
// type UpperWords =
//   | 'A'
//   | 'B'
//   | 'C'
//   | 'D'
//   | 'E'
//   | 'F'
//   | 'G'
//   | 'H'
//   | 'I'
//   | 'J'
//   | 'K'
//   | 'L'
//   | 'M'
//   | 'N'
//   | 'O'
//   | 'P'
//   | 'Q'
//   | 'R'
//   | 'S'
//   | 'T'
//   | 'U'
//   | 'V'
//   | 'W'
//   | 'X'
//   | 'Y'
//   | 'Z'
// type CustomKebabCase<S extends string> =
//   S extends `${infer start}${infer other}`
//     ? start extends UpperWords
//       ? `${Lowercase<start>}${CustomChange<other>}`
//       : `${start}${CustomChange<other>}`
//     : S
// type CustomChange<S extends string> = S extends `${infer start}${infer other}`
//   ? start extends UpperWords
//     ? `-${Lowercase<start>}${CustomChange<other>}`
//     : `${start}${CustomChange<other>}`
//   : S
// type TestKebabCase = CustomKebabCase<'Foo-Bar'>
