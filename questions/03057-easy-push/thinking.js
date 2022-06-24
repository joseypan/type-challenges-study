//【分析】
//1、首先需要对传入的泛型进行限制，泛型一为任意类型的数组，泛型二位任意类型数据
//type Push<T extends any[], U> = any
//2、我们需要组合成一个新的数组，可以考虑使用拓展运算符展开T,然后最后放入U
// type Push<T extends any[],U> = [...T,U]
//3、上述情况未考虑U是什么类型的，如果说U也是一个数组，不清楚题意是需要如何展示，需要展开还是说可以直接放入到最后一项
//type Push<T extends any[],U> = U extends any[]?[...T,...U]:[...T,U]
//上述写法会出现报错，当U为布尔类型的时候，所以还需要单独提出讨论
//type Push<T extends any[],U> = U extends any[]?[...T,...U]:[...T,U extends boolean?boolean:U]
