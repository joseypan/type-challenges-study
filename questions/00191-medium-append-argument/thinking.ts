// 【分析】
// 1、按照测试用例可知，类型传入两个泛型，一个泛型是函数，另一个泛型是任意类型可以用unkown代替
// 2、需要将第二个泛型的类型给到函数中的参数，所以需要用到infer去提取函数的参数
// 3、考虑到函数的返回类型要一致，所以也是通过泛型去提取出来
type CustomAppendArgument<Fn, A> = Fn extends (
  ...arg: infer argument
) => infer R
  ? (...arg: [...argument, A]) => R
  : never
type CustomTest = CustomAppendArgument<(a: string) => void, boolean>
