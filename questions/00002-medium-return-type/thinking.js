//【分析】
//1、根据题意我们可知需要获取到函数的返回类型
// type MyReturnType<T> = any;
//2、如果获取到函数的返回类型,直觉是使用infer但是如何用呢
//infer不直接使用在泛型内部
// type MyReturnType<T> = T extends (...args: any) => infer X ? X : never
