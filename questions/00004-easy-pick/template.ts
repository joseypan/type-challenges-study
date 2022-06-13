type MyPick<T, K extends keyof T> = { [D in K]: T[D] };
