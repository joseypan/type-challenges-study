let array = ['number 1', 'number2']

/*
 * 描述：解题思路均先按照js进行解题
 * 其他说明：
 */
function tupleToObject(array) {
  let obj = {}
  for (let key of array) {
    obj[key] = key
  }
  return obj
}
let data = tupleToObject(array)
console.log(data, 'data')
const array1 = [[1, 2], {}]
let data1 = tupleToObject(array1)
console.log(data1, 'data1')
//【疑问】ts类型中的in和of的区别
//in循环拿到的是循环的key,而of循环拿到的是value
//目前的问题就变成如果让[key in T]是循环的T类型的value而不是key
//但是第二个示例中有问题，不知道如何解决
// @ts-expect-error
//这个意思是指这种情况要做报错处理
//【知识点1】ts如何遍历数组：[T in A[number]]
