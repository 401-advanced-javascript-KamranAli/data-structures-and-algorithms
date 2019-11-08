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
    let string = ' ';
    let currentNode = this.head;
    while(currentNode !== null) {
      string = string + ' ' + currentNode.num;
      currentNode = currentNode.next;
    }
    return string;
  }

  append(value) {
    const newNode = new CurrentNode(value);
    if(this.head === null){
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.length++;
    }
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
    if(this.tail === null) {
      this.tail = newNode;
      this.length++;
      return this.tail;
    }
    let nodeCount = 1;
    while(currentNode.next !== null && nodeCount > value) {
      currentNode = currentNode.next;
      this.length++;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return newNode;
  }

  findingKth(k) {
    let currentNode = this.head;
    let counter = 0;

    if(k > this.length) {
      return 'exception';
    }
    if(k === this.length) {
      return 'equal length';
    }
    if(k < 0) {
      return 'not a positive int';
    }
    if(this.length <= 1) {
      return 'not the same length';
    }
    while(this.length - k !== counter) {
      currentNode = currentNode.next;
      counter++;
      return currentNode.value;
    }
  }
}

module.exports = LinkList;