const Stack = require('./stacks-and-queues');

describe('stacks and queues', () => {
  it('push to top', () => {
    const stack = new Stack.Stack();
    const result = stack.push('stuff');
    expect(result.value).toBe('stuff');
  });

  it('can push multiple values to a stack', () => {
    const stack = new Stack.Stack();
    stack.push('stuff');
    stack.push('stuff2');
    expect(stack.top.value).toBe('stuff2');
    expect(stack.top.next.value).toBe('stuff');

  });

  it('can pop off a stack', () => {
    const stack = new Stack.Stack();
    stack.push('stuff1');
    stack.push('stuff');
    const result = stack.pop();
    expect(result).toBe('stuff');
  });

  it('can empty a stack after multiple pop offs', () => {
    const stack = new Stack.Stack();
    stack.push('stuff1');
    stack.push('stuff');
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  it('can peek the next item on the stack', () => {
    const stack = new Stack.Stack();
    stack.push('stuff1');
    stack.push('stuff');
    expect(stack.peek()).toBe('stuff');
  });

  it('can instantiate an empty stack', () => {
    const emptyStack = new Stack.Stack();
    expect(emptyStack.top).toBe(null);
  });

  it('can enqueue on to a queue', () => {
    const queue = new Stack.Queue();
    queue.enqueue('thing1');
    expect(queue.front.value).toBe('thing1');
  });

  it('can enqueue mutltiple things', () => {
    const queue = new Stack.Queue();
    queue.enqueue('thing1');
    queue.enqueue('thing');
    expect(queue.front.value).toBe('thing1');
    expect(queue.front.next.value).toBe('thing');
  });

  it('can dequeue off a queue', () => {
    const queue = new Stack.Queue();
    queue.enqueue('thing1');
    queue.enqueue('thing2');
    const result = queue.dequeue();
    expect(result).toBe('thing1');
  });

  it('can peek into a queue', () => {
    const queue = new Stack.Queue();
    queue.enqueue('thing1');
    queue.enqueue('thing');
    expect(queue.peek()).toBe('thing1');
  });

  it('can empty a queue after multiple dequeue', () => {
    const queue = new Stack.Queue();
    queue.enqueue('thing1');
    queue.enqueue('thing');
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });

  it('can instantiate an empty queue', () => {
    const queue = new Stack.Queue();
    expect(queue.front).toBe(null);
  });
});