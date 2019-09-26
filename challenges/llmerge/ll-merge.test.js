const LinkList = require('../linked-list/linked-list');
const mergeList = require('./ll-merge');

describe('Lists Merge', () => {
  it('merges two unordered lists', () => {
    const list1 = new LinkList();
    const list2 = new LinkList();

    list1.insert('1');
    list1.insert('3');
    list1.insert('2');
    list2.insert('5');
    list2.insert('9');
    list2.insert('4');
    expect(mergeList(list1, list2)).toBe('1', '5', '3', '9', '2', '4');
  });
});