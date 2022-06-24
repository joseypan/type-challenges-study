//type Push<T extends any[], U> = [...T,U]
type Push<T extends any[], U> = U extends any[]
  ? [...T, ...U]
  : [...T, U extends boolean ? boolean : U]
