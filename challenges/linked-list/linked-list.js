class CurrentNode {
  constructor(num) {
    this.num = num;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }


  insert(num) {
    const newNode = new CurrentNode(num);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  includes(num) {
    let currentNode = this.head;
    for(let i = 0; i < this.length; i++) {
      if(currentNode.num === num) {
        return true;
      } else {
        return false;
      }
    }
  }

  toString() {
    let string;
    let currentNode = this.head;
    for(let i = 0; i < this.length; i++) {
      string = string + currentNode.num;
      currentNode = currentNode.next;
    }
  }

  append(value) {
    const newNode = new CurrentNode(value);
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode = newNode;
    this.length++;
  }

  insertBefore(value, newValue) {
    const newNode = new CurrentNode(newValue);
    let currentNode = this.head;
    if(this.head === null) {
      this.head = newNode;
      this.length++;
      return this.head;
    }
    let nodeCount = 1;
    while(currentNode.next !== null && nodeCount < value) {
      currentNode = currentNode.next;
      this.length++;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return newNode;
  }

  insertAfter(value, newValue) {
    const newNode = new CurrentNode(newValue);
    let currentNode = this.tail;
    if(this.tail === null){
      this.tail = newNode;
      this.length++;
      return this.tail;
    }
    let nodeCount = 1;
    while(currentNode.next !== null && nodeCount > value){
      currentNode = currentNode.next;
      this.length++;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return newNode;
  }
}

module.exports = LinkList;