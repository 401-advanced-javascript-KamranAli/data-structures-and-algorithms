const Stack = require('../StacksAndQueues/stacks-and-queues');

class FakeQueue {
  constructor() {
    this.incStack = new Stack.Stack();
    this.outStack = new Stack.Stack();
  }

  enqueue(value) {
    while(this.incStack.peek()) {
      this.outStack.push(this.incStack.pop());
    }
    this.incStack.push(value);
    while(this.outStack.peek()) {
      this.incStack.push(this.outStack.pop());
    }
  }

  dequeue() {
    while(this.incStack.next) {
      this.outStack.push(this.incStack.pop());
    }
    const result = this.incStack.pop();
    while(this.outStack.peek()) {
      this.incStack.push(this.outStack.pop());
    }
    return result;
  }

  
}


module.exports = FakeQueue;