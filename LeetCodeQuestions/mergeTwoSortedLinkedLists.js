let { LinkedList } = require('../DataStructures/linkedList')

const l1 = new LinkedList(1)
l1.addNode(2)
l1.addNode(4)

const l2 = new LinkedList(1)

l2.addNode(3)
l2.addNode(4)

const mergeTwoSortedLinkedLists = (l1, l2) => {
  if (!l1.head) {
    return l2.head
  }

  if (!l2.head) {
    return l1.head
  }

  let l3
  let node1 = l1.head
  let node2 = l2.head
  let node3

  while (node1 || node2) {
    if (node1 === null) {
      l3.addNode(node2)
      node2 = node2.next
      continue
    }
    if (node2 === null) {
      l3.addNode(node1)
      node1 = node1.next
      continue
    }
    if (node1.value < node2.value) {
      if (l3 === undefined) {
        console.log('brr')
        l3 = new LinkedList(node1.value)
      } else {
        l3.next = node1
        node1 = node1.next
      }
    } else {
      if (l3 === undefined) {
        console.log('prr')
        l3 = new LinkedList(node2.value)
      } else {
        l3.addNode(node2)
        node2 = node2.next
      }
    }
  }
  console.log(l3.print())
  console.log('???')
  return l3
}

console.log(mergeTwoSortedLinkedLists(l1, l2))
