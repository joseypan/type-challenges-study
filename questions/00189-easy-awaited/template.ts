type MyAwaited<T extends Promise<any>> = T extends Promise<infer x>
  ? x extends Promise<any>
    ? MyAwaited<x>
    : x
  : T
