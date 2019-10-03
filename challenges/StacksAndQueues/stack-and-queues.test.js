const SomeStack = require('./stacks-and-queues');

describe.only('stacks and queues', () => {
  it('push to top', () => {
    const stack = new SomeStack.Stack();
    const result = stack.push('stuff');
    expect(result.length).toBe('stuff');
  });

});