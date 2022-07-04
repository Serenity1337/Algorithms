class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    let node = this.root
    if (this.root === null) {
      this.root = newNode
      return this.root
    }

    while (node !== null) {
      if (value > node.value) {
        if (node.right !== null) {
          node = node.right
        } else {
          node.right = newNode
          return this
        }
      } else {
        if (node.left !== null) {
          node = node.left
        } else {
          node.left = newNode
          return this
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) return
    let node = this.root
    while (node) {
      if (value === node.value) return node
      if (value > node.value) {
        node = node.right
      } else {
        node = node.left
      }
    }
    if (node === null) return 'could not find'
    return node
  }
  remove(value) {}
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(15)
tree.insert(5)
tree.insert(6)
tree.insert(4)
tree.insert(8)
tree.insert(20)
tree.insert(30)
console.log(tree)
console.log(tree.lookup(5))
console.log(tree.lookup(2))
