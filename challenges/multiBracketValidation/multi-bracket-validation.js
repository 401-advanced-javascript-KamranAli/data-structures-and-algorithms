function multiBracketValidation(input) {

  const { Stack } = require('../StacksAndQueues/stacks-and-queues');

  const stack = new Stack();
  const brackets = ['(', ')', '{', '}', '[', ']'];
  let result;
  let array = [];

  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(' || input[i] === '{' || input[i] === '['){
      stack.push(input[i]);
    }
    if(input[i] === ')' || input[i] === '}' || input[i] === ']'){
      const leftClose = stack.pop();
      let rightStuff = brackets.indexOf(input[i]);
      let leftStuff = brackets.indexOf(leftClose);
      let test = rightStuff - leftStuff;
      array.push(test);
    }
  }
  if(stack.top) {
    return false;
  }
  for(let j = 0; j < array.length; j++){
    if(array[j] !== 1){
      result = false;
    } else {
      result = true;
    }

  }

  return result;
}

module.exports = multiBracketValidation;