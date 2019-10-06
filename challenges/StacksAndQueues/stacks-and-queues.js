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
    const newNode = new Node(value);
    if(this.top === null) {
      return this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    return this.top.value;
  }

  pop() {
    let stuff;
    if(this.top) {
      stuff = this.top.value;
      this.top = this.top.next;
    }
    return stuff;
  }

  peek() {
    return this.top.value;
  }

}

module.exports = { Stack, Node };