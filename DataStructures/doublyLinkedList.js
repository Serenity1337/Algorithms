class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }
  addNode(value) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail.next.prev = this.tail
    this.tail = newNode
    this.length++
    return this.head
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
  insert(index, value) {
    let node = this.head
    let length = 0
    if (index === 0) {
      this.prepend(value)
      return this.head
    }
    if (index >= this.length) {
      return 'Index was out of bounds'
    }
    while (node !== null) {
      if (index === length) {
        const tempNode = new Node(node.value)
        tempNode.next = node.next
        node.value = value
        node.next = tempNode
        tempNode.prev = node
        this.length++
        return this.head
      } else {
        node = node.next
        length++
      }
    }
  }
  delete(index) {
    if (index === 0) {
      const tempNode = new Node(this.head.next.value)
      tempNode.next = this.head.next.next
      this.head = tempNode
      this.length--
      return this.head
    }
    if (index >= this.length) {
      return 'Index was out of bounds'
    }
    let node = this.head
    let len = 0

    while (node !== null) {
      if (index === len) {
        node.value = node.next.value
        node.next = node.next.next
        node.prev = node.next.prev
        this.length--
        return this.head
      } else {
        node = node.next
        len++
      }
    }
  }
}

const newLinkedList = new LinkedList(10)
newLinkedList.addNode(5)
newLinkedList.addNode(15)
newLinkedList.prepend(20)
newLinkedList.insert(2, 50)

newLinkedList.delete(0)
console.log(newLinkedList)
// console.log(newLinkedList)
// console.log(newLinkedList.delete(0), 'test')
// console.log(newLinkedList)
