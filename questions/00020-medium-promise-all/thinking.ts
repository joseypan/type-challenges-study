// 【分析】
// 1、按照测试用例可知，首先给PromiseAll方法限制传入的参数类型必须是数组，any[]
// 2、传入的参数都有一个const关键字，所以类型一定是readonly
// 3、返回的类型与promise一致那一定是Promise类型，但是泛型不确定
// declare function PromiseAll(values: readonly any[]): Promise<any>

type AAB = Promise<[1, 2, 3]>
//本来想研究一下AAB是什么类型，但是他测试用例没有用Alike，直接用的Equal，有什么特殊含义吗
// type AAC =typeof PromiseAll([1,2,3])

// 【疑问】
// 为什么promise传入的是一个对象呢？不是很理解
