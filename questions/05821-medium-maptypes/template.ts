type MapTypes<
  T extends { [key: string]: any },
  U extends { mapFrom: any; mapTo: any },
> = {
  [key in keyof T]: T[key] extends U['mapFrom']
    ? U extends { mapFrom: T[key] }
      ? U['mapTo']
      : never
    : T[key]
}
