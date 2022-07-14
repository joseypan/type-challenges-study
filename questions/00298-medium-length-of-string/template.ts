type TransformToArray<T extends string> = T extends `${infer start}${infer end}`
  ? [start, ...TransformToArray<end>]
  : []
type LengthOfString<S extends string> = Length<TransformToArray<S>>
