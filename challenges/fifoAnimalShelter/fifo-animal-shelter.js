const Queue = require('../StacksAndQueues/stacks-and-queues');

class Animal {
  constructor() {
    this.dog = new Queue.Queue();
    this.cat = new Queue.Queue();
  }

  enqueue(animal) {
    if(animal.type === 'dog'){
      this.dog.enqueue(animal.name);
    }
    if(animal.type === 'cat'){
      this.cat.enqueue(animal.name);
    }
  }

  dequeue(pref) {
    if(pref === 'cat'){
      if(!this.cat.peek()){
        return 'no cats found';
      }
      if(this.cat.peek()){
        return this.cat.dequeue();
      }
    }
    if(pref === 'dog'){
      if(!this.dog.peek()){
        return 'no dogs found';
      }
      if(this.dog.peek()){
        return this.dog.dequeue();
      }
    }
  }

}

module.exports = Animal;