//【分析】
//1、这道题主要需求是返回元组的长度
// 如何获取泛型的长度呢？T['length']
//2、需要判断泛型的类型不能为数字和字符串（需要对泛型就行类型限制为数组）
//  如何对泛型进行类型限制呢？可以用extends进行泛型约束
// 从而得出的结果是：
// type Length<T extends any[]> = T['length']
// 但是测试不通过
//通过查资料得知需要在any[]前加入readonly
//最终结果是：type Length<T extends readonly any[]> = T['length']
