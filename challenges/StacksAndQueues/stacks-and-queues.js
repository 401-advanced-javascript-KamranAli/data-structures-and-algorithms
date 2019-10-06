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

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    let currentNode = this.front;

    if(!currentNode){
      this.front = newNode;
    } else {
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  
}

module.exports = { Stack, Node, Queue };