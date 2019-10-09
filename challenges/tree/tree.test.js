const Tree = require('./tree');

describe(' Binary Search Tree', () => {
  it('can instantiate an empty tree', () => {
    const tree = new Tree.BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('can instantiate a tree with one node', () => {
    const tree = new Tree.BinaryTree();
    tree.add(1);
    expect(tree.root.value).toBe(1);
    expect(tree.root.right).toBe(null);
    expect(tree.root.left).toBe(null);
  });

  it('can add left and right child to a single root node', () => {
    const tree = new Tree.BinaryTree();
    tree.add(2);
    tree.add(1);
    tree.add(3);

    expect(tree.root.value).toBe(2);
    expect(tree.root.right.value).toBe(3);
    expect(tree.root.left.value).toBe(1);
  });

  it('can return a collection from preorder traversal', () => {
    const tree = new Tree.BinaryTree();
    tree.add(6);
    tree.add(2);
    tree.add(7);

    const result = tree.preOrder();
    expect(result).toEqual([6, 2, 7]);
  });
});