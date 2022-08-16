type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = TupleToUnion<CombineStr<B, E, M>>
/*
 * 描述：遍历最后一项数组，以最后一项数组为遍历条件，若不是数组则表示已经遍历完，直接返回never
 */
type CombineStr<B extends string, E, M, OE = E, OM = M> = M extends [
  infer MStart,
  ...infer MOther,
]
  ? E extends [infer EStart, ...infer EOther]
    ? EStart extends string
      ? MStart extends string
        ? [`${B}__${EStart}--${MStart}`, ...CombineStr<B, EOther, M, OE, OM>]
        : never
      : never
    : OE extends E
    ? MStart extends string
      ? [`${B}--${MStart}`, ...CombineStr<B, E, MOther, OE, OM>]
      : never
    : [...CombineStr<B, OE, MOther, OE, OM>]
  : E extends [infer EStart, ...infer EOther]
  ? OM extends M
    ? EStart extends string
      ? [`${B}__${EStart}`, ...CombineStr<B, EOther, M, OE, OM>]
      : never
    : []
  : []
