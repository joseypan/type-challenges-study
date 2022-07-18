type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer x}`
  ? `${x}`
  : `${T}`
