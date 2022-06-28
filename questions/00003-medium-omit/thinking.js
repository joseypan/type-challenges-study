//【分析】
//1、根据测试用例可知需要传入两个泛型，且需要保证第二个泛型一定是继承于第一个泛型，所以先进行类型限制
//type MyOmit<T, K extends T> = any
//2、需要遍历传入的泛型一，如果当前遍历的项也继承于泛型二则never，否则加入
//type MyOmit<T,K extends keyof T> =any
//我们应该取keyof T和K的差集，遍历这个差集取值，但是如何获取到差集？怎么表示呢？
//可以参考之前的Exclude

//type MyOmit<T, K extends keyof T> = { [D in Exclude<keyof T, K>]: T[D] }
