const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  #array = []


  push(element) {
    this.#array.push(element);
    return 1;
  }

  pop() {
    if (this.#array.length > 0) {
      let result= this.#array[this.#array.length-1]
      this.#array.pop()
      return result;
    }
    return -1;

  }

  peek() {
    if (this.#array.length>0)
    {
      return this.#array[this.#array.length-1]
    }
    return -1;
        
  }
}

module.exports = {
  Stack
};
