class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      return this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(node, value) {
    if(node === null) {
      return false;
    } else if(value < node.value) {
      return this.contains(node.left, value);
    } else if(value > node.value) {
      return this.contains(node.right, value);
    }
    return true;
  }

  preOrder() {
    return preOrderHelp(this.root, []);
  }

  inOrder() {
    return inOrderHelp(this.root, []);
  }

  postOrder() {
    return postOrderHelp(this.root, []);
  }

  breadthFirst() {
    let node = this.root;
    const queue = [node];
    const result = [];
    while(queue.length) {
      node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
      result.push(node.value);
    }
    return result;
  }

}

function preOrderHelp(node, result) {
  if(node) {
    result.push(node.value);
    if(node.left) preOrderHelp(node.left, result);
    if(node.right) preOrderHelp(node.right, result);
  }
  return result;
}

function inOrderHelp(node, result) {
  if(node) {
    if(node.left) inOrderHelp(node.left, result);
    result.push(node.value);
    if(node.right) inOrderHelp(node.right, result);
  }
  return result;
}

function postOrderHelp(node, result) {
  if(node) {
    if(node.left) postOrderHelp(node.left, result);
    if(node.right) postOrderHelp(node.right, result);
    result.push(node.value);
  }
  return result;
}


module.exports = {
  Node,
  BinaryTree
};
