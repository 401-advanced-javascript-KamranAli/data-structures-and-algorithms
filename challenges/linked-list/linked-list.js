class CurrentNode {
  constructor(num){
    this.num = num;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  insert(num) {
    const newNode = new CurrentNode(num);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  includes(num) {
    let currentNode = this.head;
    for(let i = 0; i < this.length; i++){
      if(currentNode.num === num){
        return true;
      } else {
        return false;
      }
    }
  }

  toString() {
    let string;
    let currentNode = this.head;
    for(let i = 0; i < this.length; i++){
      string = string + currentNode.num;
      currentNode = currentNode.next;
    }
  }

}

module.exports = LinkList;