//【分析】
//1、传入的泛型需要进行范围限定，例如第一个泛型需要限定只能是布尔类型
// If<C extends Boolean,T,F>
//2、根据测试用例可知当布尔值为true的时候返回第二个泛型，当布尔值为false的时候返回第三个泛型
//可以使用三元表达式进行判断
//最终结果：If<C extends Boolean,T,F> = C extends true?T:F
