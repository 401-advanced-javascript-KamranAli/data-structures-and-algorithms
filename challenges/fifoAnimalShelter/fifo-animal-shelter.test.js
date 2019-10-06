const Animal = require('./fifo-animal-shelter');

describe('Animal Shelter', () => {
  it('enqueue cats and dogs', () => {
    const queue = new Animal();
    const cat1 = {
      type: 'cat',
      name: 'Posty'
    };
    const dog1 = {
      type: 'dog',
      name: 'Chancellor'
    };

    queue.enqueue(cat1);
    queue.enqueue(dog1);
    expect(queue.cat.front.value).toEqual('Posty');
    expect(queue.dog.front.value).toEqual('Chancellor');
  });

  it('dequeue based on pref', () => {
    const queue = new Animal();
    const cat1 = {
      type: 'cat',
      name: 'Posty'
    };
    const dog1 = {
      type: 'dog',
      name: 'Chancellor'
    };

    queue.enqueue(cat1);
    queue.enqueue(dog1);
    queue.dequeue('cat');
    queue.dequeue('dog');

    expect(queue.cat.front.value).toEqual('Posty');
    expect(queue.dog.front.value).toEqual('Chancellor');
  });

  it('returns an error if none left', () => {
    const queue = new Animal();
    const cat1 = {
      type: 'cat',
      name: 'Posty'
    };
    const dog1 = {
      type: 'dog',
      name: 'Chancellor'
    };
    queue.enqueue(cat1);
    queue.enqueue(dog1);
    queue.dequeue('cat');
    const catResult = queue.dequeue('cat');
    queue.dequeue('dog');
    const dogResult = queue.dequeue('dog');
    expect(catResult).toEqual('no cats found');
    expect(dogResult).toEqual('no dogs found');

  });
});