const LinkList = require('./ll-merge');
const mergeList = require('./ll-merge');

describe('Lists Merge', () => {
  it('merges two unordered lists', () => {
    const list1 = new LinkList();
    const list2 = new LinkList();

    list1.insert('1'),
    list1.insert('3'),
    list1.insert('2'),
    list1.insert('5'),
    list1.insert('9'),
    list1.insert('4');
    const result = mergeList(list1, list2);
    expect(result).toEqual('1', '5', '3', '9', '2', '4');

  });
});