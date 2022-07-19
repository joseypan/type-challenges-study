type StringToUnion<T extends string> = T extends `${infer start}${infer other}`
  ? start | CustomStringToUnion<other>
  : never
