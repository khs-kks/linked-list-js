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

  getTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  getAtIndex(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range");
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    if (!this.head.next) {
      let value = this.head.value;
      this.head = null;
      return value;
    }

    let previous = this.head;
    let current = this.head.next;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    return current.value;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return null;
  }

  toString() {
    const values = [];
    let finalString = "";

    let currentNode = this.head;
    while (currentNode) {
      values.push(`( ${currentNode.value} )`);
      currentNode = currentNode.next;
    }

    console.log(values.join(" -> ") + " -> null");
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      throw "Index out of range";
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let previous = this.getAtIndex(index - 1);
    let newNode = new Node(value, previous.next);
    previous.next = newNode;
  }
}

let list = new LinkedList();

list.append("1");
list.append("2");
list.append("3");
list.append("4");
// list.pop();

// list.traverse();

// list.prepend("Proba");
// list.prepend("Test");
// list.prepend("Probvam se");
// a.append("Last");
// a.append("Trim");
// a.append("HELLOOO");
// a.append("Paca");

// list.traverse();
list.toString();

list.insertAt("5", 2);

list.toString();
