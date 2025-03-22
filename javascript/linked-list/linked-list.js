//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

export class LinkedList {

  constructor() {
    this.head = null
    this.tail = null
  }
  
  push(value) {
    const node = new Node(value)

    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
  }

  pop() {
    const node = this.tail
    this.tail = this.tail.prev

    if (!this.node.next) {
      this.tail = null
    }

    if (!this.node.prev) {
      this.head = null
    }

    return node.value
  }

  shift() {
    const node = this.head
    this.head = this.head.next

    if (!this.node.next) {
      this.tail = null
    }

    if (!this.node.prev) {
      this.head = null
    }

    return node.value
  }

  unshift(value) {
    const node = new Node(value)

    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }

  delete(value) {
    let node = this.head
    while (node.value !== value) {
      node = node.next
    }

    if (node.prev) {
      node.prev.next = node.next
    } else {
      this.head = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    } else {
      this.tail = node.prev
    }
  }

  count() {
    if (!this.head) {
      return 0
    }

    let node = this.head
    let count = 1
    while (node.next) {
      node = node.next
      count += 1
    }

    return count
  }
}
