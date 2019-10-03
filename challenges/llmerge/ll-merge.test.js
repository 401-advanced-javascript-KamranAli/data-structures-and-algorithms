const LinkList = require('../linked-list/linked-list');
const mergeList = require('./ll-merge');

describe('Lists Merge', () => {
  it('merges two unordered lists', () => {
    const lOne = new LinkList();
    const lTwo = new LinkList();

    lOne.insert('1');
    lOne.insert('3');
    lOne.insert('2');
    lTwo.insert('5');
    lTwo.insert('9');
    lTwo.insert('4');

    const result = mergeList(lOne, lTwo);
    expect(result.value).toBe('1');
  });
});