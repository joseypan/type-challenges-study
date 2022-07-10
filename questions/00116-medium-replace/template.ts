type Replace<
  S extends string,
  From extends string,
  To extends string,
> = From extends ''
  ? S
  : S extends `${infer start}${From}${infer end}`
  ? `${start}${To}${end}`
  : S
