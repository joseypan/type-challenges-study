//【分析】
//1、根据单元测试可知我们需要实现的效果需要和Exclude相同，首先得了解Exclude
//Exclude传入两个泛型，返回的会是差集
//https://blog.csdn.net/qq_43869822/article/details/121664818
//2、对于Exclude有了基本认识，但是需要了解单测用例用Exclude执行后的结果是什么？
//
type A = Exclude<'a' | 'b' | 'c', 'a'> //type A 的类型为“b"|"c"
type B = Exclude<'a' | 'b' | 'c', 'a' | 'b'> //type B的类型为"c"
type C = Exclude<string | number | (() => void), Function> //type C的类型为string|number
type D = MyExclude<'a' | 'b' | 'c', 'a'>
//传入泛型T是一个联合类型，可以有的类型假设有a,b,c，传入的泛型D可以是一个单类型也可以是一个联合类型，可以有的类型假设是a，我需要得到的结果是新得到的类型只能是b,c
//如果按照js的逻辑来说一定是把另外一个值给删除了，但是怎么实现的呢
//为什么直接返回类型T就能实现呢？
//内置应该是做了这么一件事情，当我们拿到联合类型T之后，他可能把联合类型的所有类型都进行了收集，然后把每一项都和D进行处理，判断当前项是不是继承于D,若是继承则返回never表示不会是这个类型，如果不继承则保留。所以实现了除去的效果

//但是都是基于猜想，没有实际验证。。。
