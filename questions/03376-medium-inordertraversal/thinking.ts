// 【分析】
// 1、这道题从题目说明来看，是一道二叉树中序遍历的题
// 2、如何在ts中实现中序遍历的逻辑呢？
// 3、如何完成一个对象的遍历？可以通过keyof typeof 来取key进行遍历
// 4、遍历的时候要考虑当前key是否extends 'left' 如果是为left则要继续遍历left这个结构，何时继续遍历right?
// 5、我们知道传入的是一个树状结构或者是null，返回的是一个数组结构。首先判断如果传入的是null，则直接是空数组
// 为了保证能够直接取到T['left']所以最好判断[T]extends[TreeNode]这样就可以直接取值了
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type CustomInorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [
      ...CustomInorderTraversal<T['left']>,
      T['val'],
      ...CustomInorderTraversal<T['right']>,
    ]
  : []
type TestInorderTraversal = CustomInorderTraversal<typeof tree1>
