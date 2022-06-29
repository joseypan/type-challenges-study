type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [D in keyof T]: T[D]
} & { [D in Exclude<keyof T, K>]: T[D] }

type A = MyReadonly2<{ name: string }, 'name'>
