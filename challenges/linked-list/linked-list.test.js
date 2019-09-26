const LinkList = require('./linked-list.js');

describe('linked lists', () => {
  it('will construct an empty list', () => {
    const list = new LinkList();
    const result = {
      length: 0,
      head: null,
      tail: null
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
    const list = new LinkList;
    list.insert('node1');
    expect(list.includes(list.head.num)).toBe(true);
    expect(list.includes('node2')).toBe(false);
  });
  
  it('returns a string of all the values in the linked list', () => {
    const list = new LinkList;
    list.insert('node1');
    const result = list.head.num;
    expect(list.head.num.toString()).toBe(result);
  });

  it('appending to a linked list', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.append('node3');
    expect(list.length).toBe(3);
  });

  it('appending multiple nodes to a linked list', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.append('node3');
    list.append('node4');
    list.append('node5');
    expect(list.length).toBe(5);
  });

  it('insert a node before a node in the middle of a linked list', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.insert('node3');
    list.insert('node4');
    list.insert('node5');
    list.insertBefore('node3', 'node2.5');
    expect(list.length).toBe(6);
  });

  it('insert a node before the first node of a linked list', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.insert('node3');
    list.insert('node4');
    list.insertBefore('node1', 'node0.5');
    expect(list.length).toBe(5);
  });

  it('insert a node after a node in the middle of a linked list', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.insert('node3');
    list.insert('node4');
    list.insertAfter('node2', 'node2.5');
    expect(list.length).toBe(5);
  });

  it('k greater than the length of list', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.insert('node3');
    const k = 4;
    const result = list.findingKth(k);
    expect(result).toBe('exception');
  });

  it('k and length of the list are the same', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.insert('node3');
    const k = 3;
    const result = list.findingKth(k);
    expect(result).toBe('equal length');
  });

  it('k is not a positive int', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.insert('node3');
    const k = -3;
    const result = list.findingKth(k);
    expect(result).toBe('not a positive int');
  });

  it('k is not the length', () => {
    const list = new LinkList();
    list.insert('node1');
    const k = 0;
    const result = list.findingKth(k);
    expect(result).toBe('not the same length');
  });

  it('k is in happy place', () => {
    const list = new LinkList();
    list.insert('node1');
    list.insert('node2');
    list.insert('node3');
    const k = 1;
    const result = list.findingKth(k);
    expect(result).toBe('node2');
  });

});