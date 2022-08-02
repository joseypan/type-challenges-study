type StartsWith<
  T extends string,
  U extends string,
> = T extends `${infer TStart}${infer TEnd}`
  ? U extends `${infer UStart}${infer UEnd}`
    ? TStart extends UStart
      ? StartsWith<TEnd, UEnd>
      : false
    : true
  : false
