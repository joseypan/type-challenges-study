type UpperWords =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
type KebabCase<S extends string> = S extends `${infer start}${infer other}`
  ? start extends UpperWords
    ? `${Lowercase<start>}${CustomChange<other>}`
    : `${start}${CustomChange<other>}`
  : S
type CustomChange<S extends string> = S extends `${infer start}${infer other}`
  ? start extends UpperWords
    ? `-${Lowercase<start>}${CustomChange<other>}`
    : `${start}${KebabCase<other>}`
  : S
