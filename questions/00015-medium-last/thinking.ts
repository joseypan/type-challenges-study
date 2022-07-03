// 【分析】
// 根据测试用例，我们可知需要拿到数组的最后一项，首先想到就是用infer进行参数提取

// type ABC<T extends any[]> = T extends [...infer X, infer Y] ? Y : never
