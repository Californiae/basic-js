const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  // Returns the length of the chain
  getLength() {
    return this.chain.length;
  },

  // Adds a link to the chain
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this; // Returns the chainMaker object for chaining
  },

  // Removes the link at the specified position
  removeLink(position) {
    if (position < 1 || position > this.chain.length || typeof position !== 'number') {
      this.chain = []; // Reset the chain if the position is invalid
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // Remove the link at the specified position
    return this; // Return the chainMaker object for chaining
  },

  // Reverses the order of the chain
  reverseChain() {
    this.chain.reverse();
    return this; // Return the chainMaker object for chaining
  },

  // Returns the final chain as a string and resets it
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = []; // Reset the chain for the next operations
    return result; // Return the string representation of the chain
  }
};

module.exports = {
  chainMaker
};
