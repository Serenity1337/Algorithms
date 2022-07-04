class Node {
  constructor(value) {
    this.value = value
    this.next = null
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
    if (this.head === this.tail) {
      this.tail = newNode
      this.head.next = this.tail
    } else {
      this.tail.next = newNode
      this.head.next = this.tail
    }
    this.length++
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.tail = this.head
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
        // this.tail = this.head.next
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
      this.tail = this.head.next
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
        this.length--
        return this.head
      } else {
        node = node.next
        len++
      }
    }
  }
  print() {
    let arrValues = []
    let node = this.head
    while (node !== null) {
      console.log(node.value)
      node = node.next
    }
  }
  reverse() {
    if (this.length === 1) {
      return this.print()
    }
    let node = this.head
    let prev = null

    while (node !== null) {
      if (node.next === null) {
        node.next = prev
        this.head = node
        break
      }
      let temp = node.next
      node.next = prev
      prev = node

      node = temp
    }
    return this.print()
  }
}

const newLinkedList = new LinkedList(10)
newLinkedList.addNode(5)
newLinkedList.addNode(15)
newLinkedList.prepend(20)
newLinkedList.insert(2, 50)
newLinkedList.delete(0)
newLinkedList.print()
newLinkedList.reverse()
console.log('test', newLinkedList, 'test')
// console.log(newLinkedList.delete(0), 'test')
// console.log(newLinkedList)
