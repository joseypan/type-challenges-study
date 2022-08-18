// 【分析】
// 1、根据测试用例可知，当前这道题主要是要实现对象key和value的互换
type CustomFlip<T> = T extends { [key: string | number]: any }
  ? { [key in keyof T as T[key]]: key }
  : T

type TestFlip = CustomFlip<{ a: 'pi' }>
