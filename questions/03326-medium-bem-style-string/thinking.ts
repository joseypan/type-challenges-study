// 【分析】
// 1、按照测试用例可知，当前题目是需要对传入的类型进行遍历，然后再进行拼接
// 2、根据类型可知，参数一传入的是字符串，类型二传入的是字符串数组，类型三传入的也是字符串数组
// 3、我们需要将类型转成联合类型，联合类型可以通过数组遍历进行拼接生成
// 4、那问题是否可以回到遍历M,然后进行拼接？当前测试用例来看E至多只有一项，但要实现通用性，应该是都要考虑的
type CustomBEM<
  B extends string,
  E extends string[],
  M extends string[],
> = TupleToUnion<CombineStr<B, E, M>>
/*
 * 描述：遍历最后一项数组，以最后一项数组为遍历条件，若不是数组则表示已经遍历完，直接返回[]
 *      主要是以遍历M
 *      M数组还有值
 *        E数组还有值
 *         [E当前项作为中间的连接字符串，M当前项作为最后的连接字符串,...(E下一项作为中间的连接符，M当前项作为最后的连接符)]
 *        E数组无值
 *          E本来有值，此次E遍历完了，需要进行下一个M遍历
 *          [...(E初始值第一项作为中间连接,M下一项作为最后的连接符)]
 *          E本来就无值
 *          [...(M当前项作为最后的连接符)]
 *      M数组没有值
 *         M数组初始就无值
 *           [...(E初始值第一项作为中间连接)]
 *         M数组初始有值
 *          没有值表示已经遍历结束，所以返回[]
 */
// type CombineStr<B extends string, E, M, OE = E, OM = M> = M extends [
//   infer MStart,
//   ...infer MOther,
// ]
//   ? E extends [infer EStart, ...infer EOther]
//     ? EStart extends string
//       ? MStart extends string
//         ? [`${B}__${EStart}--${MStart}`, ...CombineStr<B, EOther, M, OE, OM>]
//         : never
//       : never
//     : OE extends E
//     ? MStart extends string
//       ? [`${B}--${MStart}`, ...CombineStr<B, E, MOther, OE, OM>]
//       : never
//     : [...CombineStr<B, OE, MOther, OE, OM>]
//   : E extends [infer EStart, ...infer EOther]
//   ? OM extends M
//     ? EStart extends string
//       ? [`${B}__${EStart}`, ...CombineStr<B, EOther, M, OE, OM>]
//       : never
//     : []
//   : []
// type TestCustomBEM = CombineStr<'test', ['string', 'string1'], []>
// type TestCustomBEM = CustomBEM<'test', ['array'], ['str', 'str1']>
// type TestCustomBEM = ['123'] extends [infer start, ...infer other]
//   ? true
//   : false
