type TupleToUnion<T> = T extends Array<any> ? T[number] : never

// type A = TupleToUnion<[123, '456', true]>
