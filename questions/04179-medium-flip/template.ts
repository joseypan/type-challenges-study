type Flip<T> = T extends { [key: string]: any }
  ? { [key in keyof T as `${T[key]}`]: key }
  : T
