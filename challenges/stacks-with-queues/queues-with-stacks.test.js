const FakeQueue = require('./queues-with-stacks');

describe('queues and stack', () => {
  it('pushes all nodes into a new stack', () => {
    const queue = new FakeQueue();
    queue.incStack.push('stuff');
    queue.incStack.push('thing');
    queue.enqueue('other');
    expect(queue.incStack.top.value).toEqual('thing');
  });

  it('pops off tail value', () => {
    const queue = new FakeQueue();
    queue.incStack.push('stuff');
    queue.incStack.push('thing');
    queue.dequeue();
    expect(queue.incStack.top.value).toEqual('stuff');
  });
});