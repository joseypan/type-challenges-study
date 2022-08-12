type Reverse<T extends Array<any>> = T extends [...infer K, infer R]
  ? [R, ...Reverse<K>]
  : T
