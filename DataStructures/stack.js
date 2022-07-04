class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return console.log(this.top)
  }
  push(value) {
    const node = new Node(value)
    let temp = this.top
    node.next = temp
    this.top = node
    this.length++
    if (this.bottom === null) {
      this.bottom = node
    }
    return this.top
  }

  pop() {
    this.top = this.top.next
    if (this.length === 1) {
      this.bottom = null
    }
    this.length--
  }
}

const newStack = new Stack()

newStack.push('twitter')
newStack.push('google')
newStack.push('udemy')
console.log(newStack)
newStack.pop()
console.log(newStack)
newStack.pop()
console.log(newStack)
newStack.pop()
console.log(newStack)
