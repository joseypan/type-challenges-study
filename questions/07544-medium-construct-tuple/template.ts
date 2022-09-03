type ConstructTuple<L extends number, U extends unknown[] = []> = L extends 1000
  ? never
  : U['length'] extends L
  ? U
  : CustomConstructTuple<L, [...U, unknown]>
