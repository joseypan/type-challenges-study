type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}
//疑问：如果对象的key是数组怎么处理呢？
