// 【分析】
// 1、根据测试用例和题目解释可知，当前题目是需要解析百分比字符串
// 2、他按照正则的规则是/^(\+|\-)?(\d*)?(\%)?$/
type CustomPercentageParser<A extends string> =
  A extends `${infer start extends '-'|'+'}${infer other}%`
    ? [start,other,'%'] 
    : A extends `${infer start extends '-'|'+'}${infer other}`?[start,other,'']:A extends `${infer other}%`?['',other,'%']:['',A,'']
type TestPercentageParser = CustomPercentageParser<'-88%'>
