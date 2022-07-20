// 【分析】
// 1、按照测试用例可知，当前题目需要将我们传入的两个对象进行合并，所以首先应该对传入泛型的类型进行限定，限定为对象
// 2、思考如何进行合并，需要使用到对象的遍历，还是可以直接使用扩展运算符？好像这一块经常卡住

type CustomMerge<
  F extends { [key: string]: any },
  S extends { [key: string]: any },
> = {
  [key in keyof (F & S)]: key extends keyof F
    ? F[key]
    : key extends keyof S
    ? S[key]
    : never
}
// { [key in keyof (F | S)]: key extends keyof F ? key : key }
// 首先来看一下对象的类型限定，如何限定一个类型是对象类型呢？
// 使用extends{[key:string]:any}来进行对象类型限定
// 如何合并对象呢？
// 1、是用拓展运算符{...F,...S}这样好像不对
// 尝试使用keyof来进行遍历
// 所以得出来了这样的表达式{[key in keyof (F&S)]:key extends keyof F ? F[key]:'aaa'}
// 目前遇到一个瓶颈，当我想要尝试通过S[key]取值会报错，如何才能顺利取到值呢
type TestMerge = CustomMerge<{ a: '123'; b: '456' }, { c: '789' }>
