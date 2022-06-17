//【分析】
//1、这道题通过单元测试可知通过我们定义的类型，要返回Promise类型传入的泛型
//  所以第一点要对传入的类型进行限定，必须是属于Promise类型
// T extends Promise这是前提,Prmose也需要传入一个泛型
//2、如何获取到Promise传入的泛型？
//一开始的写法是
//type MyAwaited<T extends Promise<D>> = D
//但是这样写会报错Cannot find name 'D'
//怎样才能获取到Promise的泛型呢？
//通过infer来定义 Res用来提取Promise泛型中的类型[不清楚]
//3、当传入的也是Promise需要递归提取
//https://blog.csdn.net/wu_xianqiang/article/details/115427146
type a = MyAwaited<Promise<number>>
