class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      // console.log(this.last, 'test3')
      this.last.next = newNode
      this.last = newNode
      // console.log(this.first, 'test2')
      // console.log(this.last, 'test1')
    }
    this.length++
    return this
  }

  dequeue() {
    if (this.length === 1) {
      this.last = null
      this.length--
      return this
    } else {
      this.first = this.first.next
      this.length--
      return this
    }
  }
}

const newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)
console.log(newQueue)
newQueue.dequeue()
console.log(newQueue)
newQueue.dequeue()
console.log(newQueue)
newQueue.dequeue()
console.log(newQueue)
newQueue.dequeue()
console.log(newQueue)
