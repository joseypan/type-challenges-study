type TupleToNestedObject<T, U> = T extends [infer start, ...infer other]
  ? {
      [key in start as start extends PropertyKey
        ? start
        : never]: TupleToNestedObject<other, U>
    }
  : U
