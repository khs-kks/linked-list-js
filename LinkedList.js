class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(val) {
    this.head = new Node(val, this.head);
  }
  append(value) {
    if (!this.head) {
      this.addFirst(value);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value, null);
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// let a = new LinkedList();

// a.append("Qj");
// a.append("Last");
// a.append("Trim");
// a.append("HELLOOO");
// a.append("Paca");

// a.traverse();
