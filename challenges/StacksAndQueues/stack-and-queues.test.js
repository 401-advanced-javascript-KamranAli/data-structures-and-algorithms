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

  });
});