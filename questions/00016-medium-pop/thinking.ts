// 【分析】
// 1、根据测试用例可知类型P传入一个泛型，T同时T继承数组
// 2、需要去除最后一项，所以还是需要通过infer进行提取，然后舍弃掉最后一项
// type Pop<T extends any[]> = T extends [...infer X,infer Y]?X : never
