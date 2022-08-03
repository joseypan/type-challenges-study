type EndsWith<
  T extends string,
  U extends string,
> = T extends `${infer tStart}${U}` ? true : false
