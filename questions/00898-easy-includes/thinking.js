//【分析】
//1、根据单元测试可知需要传入两个泛型，泛型一是任意类型数组，并且是只读类型，泛型二可以是任意类型.
//所以可以推导出来type Includes<T extends readonly any[], U> = any
//2、需要进行类型判断，返回布尔值，一定是要使用到三元表达式
//最终结果需要是xxxxx?true:false
//3、最终问题回到如何拿到数组中的每一项，然后根据当前项是否extends U进行判断
//T[number]可以取到每一项，但是如何得出最终结果？
//如果使用
//type Includes<T extends readonly any[], U> = T[number] extends U ? true : false
//这种是不正确的，因为当他进行遍历第一个的时候就有了返回值
//所以我们应该要一个一个判断type Includes<T extends readonly any[],U>=T extends <infer First,...infer Rest>?Equal<First,U>extends true?true:Includes<Rest,U>:false

//【疑问】
//1、了解infer
//2、声明的Equal类型不是很理解
