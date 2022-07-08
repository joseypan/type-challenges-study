// 【分析】
// 1、今天的题目内容和昨天的内容比较相似
// 2、同样也可以通过匹配的方式完成

// type Empty1 = ""|"\n"|"\t";
// type Trim<S extends string> = S extends `${Empty1}${infer X}${Empty1}`?Trim<X>:S
