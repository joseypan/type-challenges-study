// 【分析】
// 1、根据测试用例可知，option方法充当一个收集器，需要把所有通过option调用的内容都放入接口类型中
如果是js的话大概思路是这样的
const map = new Map()
function option(a, b) {
  if (map.has(a)) return
  if (typeof b === Object) {
    for (let key in b) {
      option(key, b[key])
    }
  } else {
    map.set(a, typeof b)
  }
}
