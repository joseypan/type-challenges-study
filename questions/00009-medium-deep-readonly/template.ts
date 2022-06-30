type DeepReadonly<T> = {
  readonly [D in keyof T]: keyof T[D] extends never ? T[D] : DeepReadonly<T[D]>
}
