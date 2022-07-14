// 【分析】
// 1、根据测试用例可知，这道题主要考察的是返回传入字符串的长度
// 2、首先我们肯定是通过infer去提取字符串，然后再使用length方法去返回字符串的长度
// 3、Length类型需要传入的是readonly类型的数组，但是目前我们是字符串，难道要字符串转数组？
// 字符串如何将字符串拆分，难道用js的slipt?肯定不能用
//需要单独借助一个类型，将字符串转成数组
// 字符串拆解的思路是通过infer一个一个的去截取出来的
// type TransformToArray<T extends string> = T extends `${infer start}${infer end}`
//   ? [start, ...TransformToArray<end>]
//   : []
// type CustomLengthOfString<S extends string> = Length<TransformToArray<S>>

// type TestLengthOfString = CustomLengthOfString<'abc'>
