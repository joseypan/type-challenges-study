//【分析】
// 1、根据测试用例可知本题要做的是数组合并
// 首先需要对传入的类型进行限制，例如type Concat<T extends Array, U extends Array> = any
// 2、需要将T和U进行合并，如果是js直接用拓展运算符就能完成.但是ts中的合并是如何处理呢？
//  尝试同样使用拓展运算符，发现可以通过单元测试
