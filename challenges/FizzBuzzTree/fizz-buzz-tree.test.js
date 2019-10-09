const { BinaryTree, fizzBuzz } = require('./fizz-buzz-tree');

describe('Fizz Buzz Tree', () => {
  it('it can change the tree based on divisible values', () => {
    const tree = new BinaryTree();
    tree.add(45);
    tree.add(33);
    tree.add(10);
    tree.add(27);
    tree.add(52);
    tree.add(73);
    tree.add(5);

    const result = fizzBuzz(tree);
    expect(result.root.value).toEqual('FizzBuzz');
    expect(result.root.left.value).toEqual('Fizz');
    expect(result.root.left.left.value).toEqual('Buzz');
    expect(result.root.left.left.right.value).toEqual('Fizz');
    expect(result.root.left.left.left.value).toEqual('Buzz');
    expect(result.root.left.left.left.value).toEqual('Buzz');
    expect(result.root.right.value).toEqual(52);
    expect(result.root.right.right.value).toEqual(73);
  });

  it('returns tree if no values are divisible', () => {
    const tree = new BinaryTree();

    tree.add(17);
    tree.add(19);
    tree.add(29);
    tree.add(14);
    tree.add(37);
    tree.add(42);
    tree.add(51);

    const result = fizzBuzz(tree);
    expect(result).toEqual(tree);
  });
});