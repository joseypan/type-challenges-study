// 【分析】
// 1、这道题主要是根据我们传入的规则决定是什么类型的数据转为什么类型的数据，若不满足转换前的类型则不做转换
// 这样完成之后基本上跑过了前几个测试用例，但是最后一个传入的U是联合类型，测试用例没有跑过
// type CustomMapTypes<
//   T extends { [key: string]: any },
//   U extends { mapFrom: any; mapTo: any },
// > = { [key in keyof T]: T[key] extends U['mapFrom'] ? U['mapTo'] : T[key] }

// 2、如何遍历联合类型？好像是依托number来实现的,可以用IsUnion类型来判断是否是联合类型
type CustomMapTypes<
  T extends { [key: string]: any },
  U extends { mapFrom: any; mapTo: any },
> = {
  [key in keyof T]: T[key] extends U['mapFrom']
    ? U extends { mapFrom: T[key] }
      ? U['mapTo']
      : never
    : T[key]
}
