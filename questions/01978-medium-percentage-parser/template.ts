type PercentageParser<A extends string> =
  A extends `${infer start extends '-'|'+'}${infer other}%`
    ? [start,other,'%'] 
    : A extends `${infer start extends '-'|'+'}${infer other}`?[start,other,'']:A extends `${infer other}%`?['',other,'%']:['',A,'']
