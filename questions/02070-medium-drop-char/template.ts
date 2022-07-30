type DropChar<
  S extends string,
  C extends string,
> = S extends `${infer start}${infer other}`
  ? start extends C
    ? `${DropChar<other, C>}`
    : `${start}${DropChar<other, C>}`
  : S
