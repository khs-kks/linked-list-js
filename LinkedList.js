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

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getHead() {
    return this.head;
  }
}

let list = new LinkedList();

list.append("Qj");
list.prepend("Proba");
list.prepend("Test");
list.append("Probvam se");
// a.append("Last");
// a.append("Trim");
// a.append("HELLOOO");
// a.append("Paca");

list.traverse();
console.log(list.size());
console.log(list.getHead().value);
