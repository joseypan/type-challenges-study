// 【分析】
// 1、按照测试用例可知需要对传入的数字进行减一计算
// 2、如何遍历数字类型的数字？也是用extends?好像解决不了
// 3、按照之前写力扣相关题目的思路是需要拿出最后一位，然后判断最后一位的树是否大于0，如果不大于0则需要往前借位，如果一直借位到第一位还需要判断如果第一位是1，则需要考虑第一位已经没有了 
// https://juejin.cn/post/7118913605835194398
// ts没有普通的运算能力，但涉及数字却有一条生路，即ts可通过['length']访问数组长度，几乎所有数字计算都是通过它推导出来的
// 递归1000次就是上限了
type CustomMinusOne<T extends number> = T extends infer start infer other
  ? other
  : never
type TestMinusOne = CustomMinusOne<10>
