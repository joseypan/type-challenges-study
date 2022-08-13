// 【分析】
// 1、根据测试用例和题目解析来看，当前题目主要是要返回一个新的函数，并且返回值和原来一致，但是函数的参数顺序翻转
// 2、首先需要判断当前传入的泛型是否是函数类型，如果不是函数类型则直接返回泛型类型
// 3、如何提取出来传入函数的返回值类型 通过infer来提取
// 4、如何在未知函数的参数情况下获取到函数的所有参数 通过...arg:infer A来拿到参数,拿到的A是一个数组
// 5、通过Reverse类型可以进行翻转，可以通过这个方式来
type CustomFlipArguments<T> = T extends (...arg: infer A) => infer Return
  ? (...arg: Reverse<A>) => Return
  : T
type TestFlipArguments = CustomFlipArguments<(a: string, b: number) => boolean>
type TestFlipArguments1 = CustomFlipArguments<string>
