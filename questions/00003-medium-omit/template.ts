type MyOmit<T, K extends keyof T> = { [D in Exclude<keyof T, K>]: T[D] }
