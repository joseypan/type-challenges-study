//【分析】
//1、这道题的解法与push应该是一致的，首先对传入的第一个泛型进行类型限定
// type Unshift<T extends any[], U> = any
//2、最简单的处理方式就是，使用展开运算符进行合并
// type Unshift<T extends any[],U> = [U,...T]
//3、需要对U进行类型判断，若U也是数组，则也需要展开
// type Unshift<T extends any[],U> = U extends any[]?[...U,...T]:[U,...T]
