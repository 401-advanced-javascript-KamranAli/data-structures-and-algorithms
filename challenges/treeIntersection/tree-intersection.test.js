const treeIntersect = require('./tree-intersection');
const BinaryTree = require('../tree/tree');

describe('Tree Intersection', () => {
  it('values are found in both arrays', () => {
    const firstTree = new BinaryTree.BinaryTree();
    firstTree.add(4);
    firstTree.add(3);
    firstTree.add(8);
    firstTree.add(2);

    const secondTree = new BinaryTree.BinaryTree();
    secondTree.add(5);
    secondTree.add(3);
    secondTree.add(9);
    secondTree.add(2);

    const result = treeIntersect(firstTree, secondTree);
    expect(result).toEqual([3, 2]);
  });

  it('no values are found in the array', () => {
    const firstTree = new BinaryTree.BinaryTree();
    firstTree.add(4);
    firstTree.add(3);
    firstTree.add(8);
    firstTree.add(2);

    const secondTree = new BinaryTree.BinaryTree();
    secondTree.add(5);
    secondTree.add(1);
    secondTree.add(9);
    secondTree.add(0);

    const result = treeIntersect(firstTree, secondTree);
    expect(result).toEqual([]);
  });
});