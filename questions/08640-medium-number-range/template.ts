type NumberRange<
  T extends number,
  U extends number,
  K extends number[] = [],
  R extends number[] = [],
  Flag extends boolean = false,
> = Flag extends true
  ? K['length'] extends U
    ? [...R, U][number]
    : NumberRange<T, U, [...K, 1], [...R, K['length']], Flag>
  : K['length'] extends T
  ? NumberRange<T, U, [...K, 1], [...R, K['length']], true>
  : NumberRange<T, U, [...K, 1], R, Flag>
