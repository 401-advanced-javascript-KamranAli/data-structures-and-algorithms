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

  inOrder() {
    return inOrderHelp(this.root, []);
  }

}

function inOrderHelp(node, result) {
  if(node) {
    if(node.eft) inOrderHelp(node.left, result);
    result.push(node.value);
    if(node.right) inOrderHelp(node.right, result);
  }
  return result;
}

const fizzBuzz = function(tree) {
  return fbSearch(tree.root);

  function fbSearch(node) {
    if(!node) {
      return tree;
    } else if(node.value % 15 === 0) {
      node.value = 'FizzBuzz';
    } else if(node.value % 5 === 0) {
      node.value = 'Buzz';
    } else if(node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    fbSearch(node.left);
    fbSearch(node.right);
    return tree;
  }
};


module.exports = { BinaryTree, fizzBuzz };