// 【分析】
// 1、按照测试用例可知，需要将传入的数字或字符串进行取绝对值操作，所以就是匹配-？
// 使用`${T}`是一开始就都将类型转成字符串类型，统一处理
// 999_9n代表什么？
// n的作用：js中用于显示大数字的定义 普通的数字超过一定数值会丢失精度 这种方式是专门做大数字的运算用的
type CustomAbsolute<T extends number | string | bigint> =
  `${T}` extends `-${infer x}` ? `${x}` : `${T}`
type TestAbsolute = CustomAbsolute<-9_999n>
type TestAbsolute2 = CustomAbsolute<-5>
