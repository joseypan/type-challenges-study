// 【分析】
// 1、根据测试用例可知当前情况传入一个接口类型，需要递归遍历该类型实现所有内容都加上readonly
// 需要遍历当前的接口字段，判断当前字段对应的值是否是对象类型，若是对象类型则递归执行，若不是直接当前项是readonly
// 初步尝试判断当前项是否继承于对象
// 若是对象则需要继续递归
// 若不是对象则不需要递归操作了
// type DeepReadonly<T> = {readonly[D in keyof T]:T[D] extends {}?DeepReadonly<T[D]>:T[D]}
// 目前看来直接判断继承{}是不对的，函数也会被包含进去，而且并没有递归执行，而是显示的DeepReadonly类型，这是为什么呢？

// 换种思路，如果说能够提取到字段，说明他是对象，不能则不是这个类型，所以用keyof判断是否是never

// type DeepReadonly<T> = {
//   readonly [D in keyof T]: keyof T[D] extends never ? T[D] : DeepReadonly<T[D]>
// }
