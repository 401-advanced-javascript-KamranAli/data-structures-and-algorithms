const LinkList = require('./linked-list.js');

describe('linked lists', () => {
  it('will construct an empty list', () => {
    const list = new LinkList();
    const result = {
      length: 0,
      head: null
    };
    expect(list).toEqual(result);
  });

  it('insert a node into list', () => {
    const list = new LinkList();
    expect(list.length).toEqual(0);
    list.insert('node1');
    expect(list.length).toBe(1);
    list.insert('node2');
    expect(list.length).toBe(2);
  });

  it('node exists in the list', () => {
    const list = new LinkList();
    list.insert('node1');
    expect(list.includes(list.head.num)).toBe(true);
  });

  it('returns a string of all the values in the linked list', () => {
    const list = new LinkList();
    list.insert('node1');
    const stuff = list.head.num;
    expect(list.toString(stuff)).toEqual(String(stuff));

  });

});