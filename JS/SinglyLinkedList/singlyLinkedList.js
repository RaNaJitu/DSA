// Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Singly Linked List class
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(value) {
    const temp = new Node(value);

    if (this.head !== null) {
      let t1 = this.head;
      while (t1.next !== null) {
        t1 = t1.next;
      }
      t1.next = temp;
    } else {
      this.head = temp;
    }
  }

  insertAtBeginning(value) {
    const temp = new Node(value);
    temp.next = this.head;
    this.head = temp;
  }

  // Insert new node AFTER the node with given value
  insertAtPosition(newValue, afterValue) {
    let t1 = this.head;

    while (t1 !== null) {
      if (t1.data === afterValue) {
        const temp = new Node(newValue);
        temp.next = t1.next;
        t1.next = temp;
        return;
      }
      t1 = t1.next;
    }
  }

  deleteNode(value) {
    if (this.head === null) return;

    // If head needs to be deleted
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let prev = this.head;
    let curr = this.head.next;

    while (curr !== null) {
      if (curr.data === value) {
        prev.next = curr.next;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  display() {
    let t1 = this.head;
    let result = "";

    while (t1 !== null) {
      result += t1.data;
      if (t1.next !== null) {
        result += " -> ";
      }
      t1 = t1.next;
    }

    console.log(result);
  }
}

// Usage
const obj = new SinglyLinkedList();
obj.insertAtEnd(10);
obj.insertAtEnd(20);
obj.insertAtEnd(30);
obj.insertAtBeginning(5);
obj.insertAtPosition(40, 20);
// obj.deleteNode(30);
obj.display();
