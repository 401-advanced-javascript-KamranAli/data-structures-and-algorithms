class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  
  push(value) {
    let head = this.stack;
    const newNode = new Node(null, value);

    if(!head) {
      this.stack = newNode;
    } else {
      newNode.next = head;
      this.stack = newNode;
    }
  }

  // pop() {
  //   let head = this.stack;

  //   if(!head) return 'Empty Stack';

  //   this.stack = head.next;
  //   return head.value;
  // }

  // peek() {
  //   if(!this.stack) return 'empty stack';
  //   return this.stack.value;
  // }

}

module.exports = { Stack, Node };